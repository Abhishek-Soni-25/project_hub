"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import GitHubButton from '../_components/githubButton';
import { useUser } from '../_context/UserContext'

export default function Signup() {

    const router = useRouter();

    const { setUser } = useUser()

    const [loading, setLoading] = useState(false)

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form reload

        // Validation
        if (!fullName || !email || !password) {
            return alert("Please enter all details")
        }

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailIsValid = pattern.test(email)
        if (!emailIsValid) {
            return alert("Please enter a valid email")
        }

        setLoading(true)
        try {

            const res = await fetch('http://localhost:3000/api/signup', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ fullName, email, password }),
            })

            const data = await res.json()

            // Error handling
            if (res.ok) {
                setUser({ fullName, email })
                router.push("/dashboard");
            } else {
                return alert(data.message)
            }

        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong. Please try again.");
        } finally{
            setLoading(false)
        }
    };

    return (
        <>
            <div className="justify-center flex flex-col md:flex-row min-h-screen">
                {/* Image section - hidden on mobile, visible on medium screens and up */}
                <div className="hidden md:block md:flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/collabration.png')" }}>
                </div>

                {/* Form section - full width on mobile, partial width on larger screens */}
                <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-white p-4 md:p-8 flex items-center justify-center">
                    <div className="w-full max-w-md mx-auto">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-sm text-gray-500 mb-6">Get started with your free account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 md:mb-6">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-4 md:mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-4 md:mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <button
                                type='submit'
                                disabled= {loading}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-md font-medium transition-colors mb-6">
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="relative flex items-center mb-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-xs">Or signup with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <GitHubButton text="Github" />

                        <p className="text-center text-sm text-gray-500 pt-4 md:pt-5">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-600 font-medium hover:text-blue-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
