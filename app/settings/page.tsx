'use client'

import Image from "next/image";
import { useState } from "react";
import { Upload, MapPin, Link, Github, Twitter, Linkedin } from "lucide-react";

import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";

export default function Settings() {

    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        username: "johndoe",
        bio: "",
        location: "",
        website: "",
        github: "",
        twitter: "",
        linkedin: "",
        emailNotifications: false,
        weeklyDigest: false
    });

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Handle checkbox changes
    const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        setFormData(prev => ({ ...prev, [id]: checked }));
        console.log(`Toggle ${id} changed:`, checked);
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving changes...', formData);
        alert('Settings saved successfully!');
    };


    return (
        <>
            <Hsearch />
            <Navbar />
            <div className="bg-[#f8f9fc]">
                <main className="max-w-6xl mx-auto px-6 py-6">
                    <h1 className="text-2xl font-bold text-slate-800 mb-2">Settings</h1>
                    <p className="text-slate-500 mb-6">Manage your account settings and preferences</p>

                    {/* Account Settings */}
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold mb-6 text-slate-800">Account Settings</h2>

                        <div className="flex items-center mb-6">
                            <div className="w-24 h-24 rounded-full border border-slate-200 overflow-hidden mr-6 bg-slate-100">
                                <Image src="/api/placeholder/100/100" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">
                                <Upload className="w-5 h-5 mr-2" />
                                Change Photo
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row md:gap-4 mb-4">
                            <div className="flex-1 mb-4 md:mb-0">
                                <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-slate-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium mb-2 text-slate-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="bio" className="block text-sm font-medium mb-2 text-slate-700">Bio</label>
                            <textarea
                                id="bio"
                                rows={4}
                                value={formData.bio}
                                onChange={handleInputChange}
                                placeholder="Write a short bio..."
                                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="location" className="block text-sm font-medium mb-2 text-slate-700">Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Add your location"
                                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="website" className="block text-sm font-medium mb-2 text-slate-700">Website</label>
                            <div className="relative">
                                <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="Add your website URL"
                                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Social Profiles */}
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold mb-6 text-slate-800">Social Profiles</h2>

                        <div className="mb-4">
                            <label htmlFor="github" className="block text-sm font-medium mb-2 text-slate-700">GitHub</label>
                            <div className="relative">
                                <Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="github"
                                    value={formData.github}
                                    onChange={handleInputChange}
                                    placeholder="GitHub profile URL"
                                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="twitter" className="block text-sm font-medium mb-2 text-slate-700">Twitter</label>
                            <div className="relative">
                                <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="twitter"
                                    value={formData.twitter}
                                    onChange={handleInputChange}
                                    placeholder="Twitter profile URL"
                                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="linkedin" className="block text-sm font-medium mb-2 text-slate-700">LinkedIn</label>
                            <div className="relative">
                                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                    placeholder="LinkedIn profile URL"
                                    className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notification Preferences */}
                    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                        <h2 className="text-lg font-semibold mb-6 text-slate-800">Notification Preferences</h2>

                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-slate-500">Email notifications for new messages</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="emailNotifications"
                                    checked={formData.emailNotifications}
                                    onChange={handleToggleChange}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-slate-500">Weekly digest emails</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="weeklyDigest"
                                    checked={formData.weeklyDigest}
                                    onChange={handleToggleChange}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                            </label>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleSubmit}
                            className="px-5 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}
