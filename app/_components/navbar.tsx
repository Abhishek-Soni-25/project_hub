'use client'

import { Home, Clipboard, Users, Settings, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        return () => {
            window.removeEventListener('resize', checkMobile);
            // Close menu when resizing to desktop
            if (!isMobile) setIsMenuOpen(false);
        };
    }, [isMobile]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => {
        const isActive = pathname.includes(href);
        return (
            <Link href={href} className="no-underline">
                <div 
                    className={`flex items-center ${isMobile ? "py-3 px-4" : "mr-6"} text-sm cursor-pointer ${
                        isActive ? "text-slate-900 font-medium" : "text-slate-500"
                    }`}
                    onClick={() => isMobile && setIsMenuOpen(false)}
                >
                    <span className="w-5 flex justify-center mr-2">{icon}</span>
                    <span>{text}</span>
                </div>
            </Link>
        );
    };

    return (
        <>
            <nav className="border-b border-slate-200 bg-white">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center py-3 px-6">
                    <NavLink href="/dashboard" icon={<Home className="w-4 h-4" />} text="Dashboard" />
                    <NavLink href="/projects" icon={<Clipboard className="w-4 h-4" />} text="Projects" />
                    <NavLink href="/teams" icon={<Users className="w-4 h-4" />} text="Teams" />
                    <NavLink href="/settings" icon={<Settings className="w-4 h-4" />} text="Settings" />
                </div>

                {/* Mobile Navigation Bar */}
                <div className="flex md:hidden items-center justify-between py-2 px-4">
                    <div className="text-sm font-medium text-slate-900">
                        {/* Show current page name on mobile */}
                        {pathname.includes("/dashboard") && "Dashboard"}
                        {pathname.includes("/projects") && "Projects"}
                        {pathname.includes("/teams") && "Teams"}
                        {pathname.includes("/settings") && "Settings"}
                    </div>
                    <button 
                        onClick={toggleMenu}
                        className="p-1 rounded-md hover:bg-slate-100"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-slate-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobile && isMenuOpen && (
                    <div className="bg-white border-b border-slate-200 shadow-md">
                        <div className="flex flex-col">
                            <NavLink href="/dashboard" icon={<Home className="w-4 h-4" />} text="Dashboard" />
                            <NavLink href="/projects" icon={<Clipboard className="w-4 h-4" />} text="Projects" />
                            <NavLink href="/teams" icon={<Users className="w-4 h-4" />} text="Teams" />
                            <NavLink href="/settings" icon={<Settings className="w-4 h-4" />} text="Settings" />
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}