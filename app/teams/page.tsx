'use client'

import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import RecentActivity from "../_components/recentActivity";
import ActiveMembers from "../_components/activeMembers";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Plus } from 'lucide-react'

export default function Teams() {

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
                                <h2 className="text-xl md:text-2xl font-bold text-slate-800">Teams</h2>
                                <Link href="/addTeam" className="flex items-center font-semibold text-white bg-slate-900 px-3 rounded-md">
                                    <Plus size={20} className="mr-1"></Plus> Add Team
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">

                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">Development Team</h3>
                                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Frontend and backend developers working on core product features.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">8</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">12</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">86%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>

                                    </div>
                                </div>


                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">Design Team</h3>
                                        <span className="px-2 py-1 bg-red-200 text-red-600 text-xs font-medium rounded-full">Inactive</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">UX/UI designers responsible for product interface and user experience.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">4</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">6</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">75%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>

                                    </div>
                                </div>


                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">Marketing Team</h3>
                                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Marketing specialists handling campaigns and promotional activities.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">3</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">4</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">40%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">QA Team</h3>
                                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Quality assurance specialists ensuring product stability and reliability.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">5</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">8</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">92%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">DevOps Team</h3>
                                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">Active</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Infrastructure and deployment specialists managing CI/CD pipelines.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">4</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">6</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">88%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 md:p-5 shadow-sm">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-xl font-bold text-slate-800">Data Science Team</h3>
                                        <span className="px-2 py-1 bg-red-200 text-red-600 text-xs font-medium rounded-full">Inactive</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4">Data scientists and analysts working on business intelligence and ML models.</p>
                                    <div className="flex justify-around text-center pb-2">
                                        <div>
                                            <div className="text-xl font-semibold">6</div>
                                            <div className="text-xs text-gray-600">Members</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">5</div>
                                            <div className="text-xs text-gray-600">Projects</div>
                                        </div>
                                        <div>
                                            <div className="text-xl font-semibold">70%</div>
                                            <div className="text-xs text-gray-600">Complete</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-400">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-200 border-2 border-white"></div>
                                        </div>
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
