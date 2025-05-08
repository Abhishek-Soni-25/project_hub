'use client'

import { Search, X } from 'lucide-react'
import { useState, useEffect } from 'react';
import { useSession } from "next-auth/react"

import { useUser } from '../_context/UserContext';

export default function Hsearch() {
    const { data: session } = useSession()
    const { user } = useUser()
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // You can add more functionality here like debounced API calls
        console.log("Searching for:", e.target.value);
    };

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded);
    };

    const userName = user?.fullName || session?.user?.name || "";

    return (
        <>
            <header className="flex items-center justify-between bg-slate-900 text-white px-4 md:px-6 py-3">
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Logo - always visible */}
                    <h1 className="font-bold text-base md:text-lg">Project_Hub</h1>

                    {/* Search for desktop - hidden on mobile */}
                    <div className="relative rounded-md bg-slate-800 hidden md:flex items-center">
                        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="bg-transparent pl-10 pr-4 py-1.5 text-sm text-white rounded-md border-none outline-none w-48 lg:w-64"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {/* Mobile search button */}
                <div className="flex items-center">
                    {isMobile && !isSearchExpanded && (
                        <button 
                            onClick={toggleSearch}
                            className="mr-3 p-1 rounded-md hover:bg-slate-800"
                        >
                            <Search className="h-5 w-5 text-gray-300" />
                        </button>
                    )}
                    <div className="font-bold text-base truncate md:max-w-none">
                        {userName}
                    </div>
                </div>
            </header>

            {/* Expanded search bar for mobile */}
            {isMobile && isSearchExpanded && (
                <div className="bg-slate-900 text-white px-4 py-2 flex items-center">
                    <div className="relative rounded-md bg-slate-800 flex items-center flex-grow">
                        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="bg-transparent pl-10 pr-4 py-1.5 text-sm text-white rounded-md border-none outline-none w-full"
                            value={searchQuery}
                            onChange={handleSearch}
                            autoFocus
                        />
                    </div>
                    <button 
                        onClick={toggleSearch}
                        className="ml-2 p-1 rounded-md hover:bg-slate-800"
                    >
                        <X className="h-5 w-5 text-gray-300" />
                    </button>
                </div>
            )}
        </>
    );
}