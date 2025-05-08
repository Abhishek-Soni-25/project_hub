'use client'

import ActiveMembers from "../_components/activeMembers";
import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import RecentActivity from "../_components/recentActivity";
import { useState, useEffect } from "react";

export default function Dashboard() {
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
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">Dashboard</h2>

                        {/* Metrics Grid - 1 column on mobile, 2 on md, 4 on lg */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                            {/* Total Projects */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                <div className="text-gray-500 text-sm flex items-center mb-2">
                                    <div className="flex items-center justify-center mr-2">
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#3b82f6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    Total Projects
                                </div>
                                <div className="text-2xl md:text-3xl font-semibold text-slate-800">24</div>
                            </div>

                            {/* Active Tasks */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                <div className="text-gray-500 text-sm flex items-center mb-2">
                                    <div className="flex items-center justify-center mr-2">
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#f59e0b">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    Active Tasks
                                </div>
                                <div className="text-2xl md:text-3xl font-semibold text-slate-800">32</div>
                            </div>

                            {/* Team Members */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                <div className="text-gray-500 text-sm flex items-center mb-2">
                                    <div className="flex items-center justify-center mr-2">
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#10b981">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    Team Members
                                </div>
                                <div className="text-2xl md:text-3xl font-semibold text-slate-800">12</div>
                            </div>

                            {/* Completed */}
                            <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                <div className="text-gray-500 text-sm flex items-center mb-2">
                                    <div className="flex items-center justify-center mr-2">
                                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#8b5cf6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    Completed
                                </div>
                                <div className="text-2xl md:text-3xl font-semibold text-slate-800">18</div>
                            </div>
                        </div>

                        {/* Recent Projects */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">Recent Projects</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                {/* E-commerce Platform */}
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
                                </div>

                                {/* Mobile App Backend */}
                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-slate-800">Mobile App Backend</h3>
                                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">In Review</span>
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
                                </div>

                                {/* Analytics Dashboard */}
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
                                </div>
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