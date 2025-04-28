"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Signup() {

    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form reload

        try {
            // const res = await fetch("/api/auth/signup", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ fullName, email, password }),
            // });

            // const data = await res.json();

            if (true) {
                // alert(fullName +  email + password);
                // Optionally redirect to login page
                router.push('/dashboard');
            } else {
                alert(`Signup failed`);
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="flex min-h-screen bg-gray-900">
                <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/collabration.png')" }}>
                </div>

                
                <div className="md:w-1/3 lg:w-2/5 xl:w-1/3 bg-white p-8 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-sm text-gray-500 mb-6">Get started with your free account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
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

                            <div className="mb-6">
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

                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Create a password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <button
                                type='submit'
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors mb-6">
                                Create Account
                            </button>
                        </form>

                        <div className="relative flex items-center mb-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-xs">Or signup with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 mb-6">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 font-medium hover:text-blue-500">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
