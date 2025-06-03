"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

import GitHubButton from '../_components/githubButton';
import { useUser } from '../_context/UserContext';

export default function Login() {

    const router = useRouter();

    const { setUser } = useUser()

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form reload

        // Validating
        if (!email || !password) {
            return alert("Please enter all details")
        }

        setLoading(true)
        try {
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()
            const fullName = data.value

            // Error handling
            if (res.ok) {
                setUser({ fullName, email })
                router.push("/dashboard");
            } else {
                return alert(data.message)
            }

        } catch (error) {
            console.log(error)
            alert("Something went wrong. Please try again.");
        } finally{
            setLoading(false)
        }
    };

    return (
        <>
            <div className="justify-center flex flex-col md:flex-row min-h-screen">
                {/* Left side - Image - hidden on mobile */}
                <div className="hidden md:block md:flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/mapping.png')" }}>
                    {/* This div is intentionally left empty to allow the background image to show */}
                </div>

                {/* Right side - Login Form - full width on mobile */}
                <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-white p-4 md:p-8 flex items-center justify-center">
                    <div className="w-full max-w-md mx-auto">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-sm text-gray-500 mb-4 md:mb-6">Log in to your account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 md:mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-3 md:mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 md:py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <Link href="#" className="block text-right text-xs text-blue-600 hover:text-blue-500 mt-2">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type='submit'
                                disabled={loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-md font-medium text-sm transition-colors mt-3 md:mt-4 mb-4 md:mb-6">
                                {loading ? "Logging In..." : "Log In"}
                            </button>
                        </form>

                        <div className="relative flex items-center mb-4 md:mb-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-xs">Or continue with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <GitHubButton text="Github" />

                        <p className="text-center text-sm text-gray-500 pt-4 md:pt-5">
                            Don`t have an account?{" "}
                            <Link href="/signup" className="text-blue-600 font-medium hover:text-blue-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
