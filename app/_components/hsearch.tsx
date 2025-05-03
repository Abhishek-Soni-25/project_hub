'use client'

import { Search } from 'lucide-react'
import { useState } from 'react';
import { useSession } from "next-auth/react"

export default function Hsearch() {

    const { data: session } = useSession()

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        // You can add more functionality here like debounced API calls
        console.log("Searching for:", e.target.value);
    };

    return (
        <>
            <header className="flex items-center justify-between bg-slate-900 text-white px-6 py-3">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold text-lg">Project_Hub</h1>

                    <div className="relative rounded-md bg-slate-800 flex items-center">
                        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="bg-transparent pl-10 pr-4 py-1.5 text-sm text-white rounded-md border-none outline-none w-64"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                <div className="font-bold text-lg">{ session?.user?.name }</div>
            </header>
        </>
    );
}
