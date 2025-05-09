'use client'

import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import RecentActivity from "../_components/recentActivity";
import ActiveMembers from "../_components/activeMembers";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Plus } from 'lucide-react'

export default function Projects() {

    // State to track screen size
    const [isMobile, setIsMobile] = useState(false);

    // Effect to handle responsive behavior
    useEffect(() => {
        // Function to check if viewport is mobile size
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is standard md breakpoint
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            <Hsearch />
            <Navbar />
            <div className="flex flex-col md:flex-row p-5 md:p-7 bg-[#f8f9fc]">
                {/* Main content area - takes full width on mobile */}
                <div className="flex-grow md:mr-6 w-full">
                    <div className="mb-6">

                        {/* Recent Projects */}
                        <div>
                            <div className="flex justify-between mb-3 md:mb-4">
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Your Projects</h2>
                                <Link href="/newProject" className="flex items-center font-semibold text-white bg-slate-900 px-3 rounded-md">
                                    <Plus size={20} className="mr-1"></Plus> New Project
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">E-commerce Platform</h3>
                                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Modern e-commerce solution with React and Node.js</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 2h ago</span>
                                    </div>
                                </div></Link>

                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">Mobile App Backend</h3>
                                        <span className="px-2 py-1 bg-red-100 text-red-400 text-xs font-medium rounded-full">In Review</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">RESTful API service for mobile applications</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 5h ago</span>
                                    </div>
                                </div></Link>

                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">Analytics Dashboard</h3>
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Planning</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Interactive data visualization with D3.js</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 1d ago</span>
                                    </div>
                                </div></Link>
                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">AI Chatbot</h3>
                                        <span className="px-2 py-1 bg-green-300 text-green-800 text-xs font-medium rounded-full">Completed</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Customer service automation with NLP</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 3days ago</span>
                                    </div>
                                </div></Link>
                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">CRM System</h3>
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Planning</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Customer relationship management solution</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 1 week ago</span>
                                    </div>
                                </div></Link>
                                <Link href="/projectDetails">
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">DevOps Pipeline</h3>
                                        <span className="px-2 py-1 bg-red-300 text-red-800 text-xs font-medium rounded-full">Inactive</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">CI/CD automation with Jenkins and Docker</p>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
                                        <span>Updated 2 weeks ago</span>
                                    </div>
                                </div></Link>
                            </div>
                        </div>

                        {/* Mobile View: Recent Activity & Active Members */}
                        {isMobile && (
                            <div className="hidden mt-6">
                                <div className="hidden mb-6">
                                    <RecentActivity />
                                </div>
                                <div>
                                    <ActiveMembers />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar - only visible on desktop */}
                {!isMobile && (
                    <div className="hidden md:block md:w-72 lg:w-80 flex-shrink-0">
                        <RecentActivity />
                        <ActiveMembers />
                    </div>
                )}
            </div>
        </>
    );
}
