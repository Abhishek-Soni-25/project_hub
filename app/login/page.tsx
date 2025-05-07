"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/app/lib/supabaseClient';
import bcrypt from 'bcryptjs';

import GitHubButton from '../_components/githubButton';

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form reload

        try {
            
            // Validating
            if (!email || !password) {
                return alert("Please enter all details")
            }

            const { data, error } = await supabase
            .from("users")
            .select('email, password')
            .eq('email', email)

            if(!data || data.length === 0){
                return alert("User not found")
            }

            const passwordIsCorrect = await bcrypt.compare(password, data[0].password)

            if(!passwordIsCorrect){
                return alert("Password is wrong")
            }

            // Error handling
            if (error) {
                console.error('Signup error:', error)
                alert(error)
            } else {

                // Rerouting
                router.push('/dashboard')
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="flex min-h-screen bg-gray-900">
                {/* Left side - Image */}
                <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/mapping.png')" }}>
                    {/* This div is intentionally left empty to allow the background image to show */}
                </div>

                {/* Right side - Login Form */}
                <div className="md:w-1/3 lg:w-2/5 xl:w-1/3 bg-white p-8 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-sm text-gray-500 mb-6">Log in to your account</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
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
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
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
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <a href="#" className="block text-right text-xs text-blue-600 hover:text-blue-500 mt-2">
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                type='submit'
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-sm transition-colors mt-4 mb-6">
                                Log In
                            </button>
                        </form>

                        <div className="relative flex items-center mb-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-xs">Or continue with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <GitHubButton text="Github" />

                        <p className="text-center text-sm text-gray-500 pt-5">
                            Don`t have an account?{" "}
                            <a href="/signup" className="text-blue-600 font-medium hover:text-blue-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
