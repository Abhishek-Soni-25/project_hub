'use client'

import { Home, Clipboard, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    return (
        <>
            <nav className="flex items-center py-3 px-6 border-b border-slate-200 bg-white">
                <Link href="/dashboard" className="no-underline">
                    <div className={`flex items-center mr-6 text-sm cursor-pointer ${pathname.includes("/dashboard") ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        <Home className="w-4 h-4 mr-2" />
                        <span>Dashboard</span>
                    </div>
                </Link>

                <Link href="/projects" className="no-underline">
                    <div className={`flex items-center mr-6 text-sm cursor-pointer ${pathname.includes("/projects") ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        <Clipboard className="w-4 h-4 mr-2" />
                        <span>Projects</span>
                    </div>
                </Link>

                <Link href="/teams" className="no-underline">
                    <div className={`flex items-center mr-6 text-sm cursor-pointer ${pathname.includes("/teams") ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        <Users className="w-4 h-4 mr-2" />
                        <span>Teams</span>
                    </div>
                </Link>

                <Link href="/settings" className="no-underline">
                    <div className={`flex items-center mr-6 text-sm cursor-pointer ${pathname.includes("/settings") ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        <Settings className="w-4 h-4 mr-2" />
                        <span>Settings</span>
                    </div>
                </Link>
            </nav>
        </>
    );
}
