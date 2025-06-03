'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import GitHubButton from "./githubButton";
import { useUser } from "../_context/UserContext";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { data: session } = useSession();
    const { user } = useUser()

    const handleGithubAction = async () => {

        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/github`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ session, user }),
        })
    }

    return (
        <>
            <nav className="bg-gray-900 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Image
                                width={50}
                                height={50}
                                className="h-8 w-8 mr-2"
                                src="/logo.png"
                                alt="Logo"
                            />
                            <span className="text-white text-xl sm:text-2xl font-bold">Project_Hub</span>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex md:hidden items-center">
                            <button
                                onClick={toggleMenu}
                                className="text-white p-2 focus:outline-none"
                            >
                                {isMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center">
                            <ul className="flex space-x-4 items-center">
                                <li>
                                    <Link href="/signup" className="text-white hover:text-gray-300 font-semibold px-4 py-2 transition-colors">
                                        Signup
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login" className="text-white hover:text-gray-300 font-semibold px-4 py-2 transition-colors">
                                        Login
                                    </Link>
                                </li>
                                <li onClick={handleGithubAction}>
                                    <GitHubButton text="Github" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                                <Link
                                    href="/signup"
                                    className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Signup
                                </Link>
                                <Link
                                    href="/login"
                                    className="block text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Login
                                </Link>
                                <div className="px-3 py-2">
                                    <GitHubButton text="Github" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}