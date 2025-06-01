'use client'

import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
import { Image as ImageIcon, Link, Github, Twitter, Linkedin } from "lucide-react";
import { useSession } from "next-auth/react"
import Image from "next/image";

import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import { useUser } from "../_context/UserContext";

export default function Settings() {

    // const router = useRouter();

    const [loading, setLoading] = useState(false)

    const { data: session } = useSession()
    const { user } = useUser()

    const [bio, setBio] = useState("");
    const [domain, setDomain] = useState("");
    const [website, setWebsite] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    const [github, setGithub] = useState("");
    const [emailNotifications, setEmailNotifications] = useState(false);

    const getUserName = user?.fullName || session?.user?.name || "";
    const getEmail = user?.email || session?.user?.email || "";

    const [selectedImage, setSelectedImage] = useState<string | null>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        imageInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    setSelectedImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }

    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    setSelectedImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true)
        try {
            if (!selectedFile) return;

            const formData = new FormData();
            formData.append('file', selectedFile);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/upload`, {
                method: 'POST',
                body: formData,
            });
            const result = await res.json();
            console.log(result);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };


    return (
        <>
            <Hsearch />
            <Navbar />
            <div className="bg-[#f8f9fc]">
                <main className="max-w-6xl mx-auto px-6 py-6">
                    <h1 className="text-2xl font-bold text-slate-800 mb-2">Settings</h1>
                    <p className="text-slate-500 mb-6">Manage your account settings and preferences</p>
                    <form onSubmit={handleSubmit}>
                        {/* Account Settings */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
                            <h2 className="text-lg font-semibold mb-6 text-slate-800">Account Settings</h2>

                            <div className="w-full max-w-4xl mx-auto">
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Image Upload Section - Centered on mobile, Left side on desktop */}
                                    <div className="w-full md:w-1/3 flex flex-col items-center mb-4">
                                        <div
                                            className={`w-36 h-36 flex items-center justify-center rounded-full border-2 border-dashed 
          ${isDragging ? 'border-blue-500' : selectedImage ? 'border-green-500' : 'border-gray-300'} 
          cursor-pointer hover:border-blue-500 transition-colors relative overflow-hidden`}
                                            onClick={handleImageClick}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleImageDrop}
                                        >
                                            {selectedImage ? (
                                                <div className="w-full h-full">
                                                    <Image
                                                        src={selectedImage}
                                                        alt="Selected"
                                                        width={50}
                                                        height={50}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                                                    <ImageIcon size={24} />
                                                </div>
                                            )}
                                        </div>

                                        <input
                                            type="file"
                                            name="avatar"
                                            ref={imageInputRef}
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                        />

                                        <p className="text-center mt-2 text-sm font-medium text-gray-600">
                                            {selectedImage ? 'Image Selected' : 'Upload Image'}
                                        </p>

                                        {selectedImage && (
                                            <button
                                                onClick={() => setSelectedImage(null)}
                                                className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    {/* Form Fields Section - Full width on mobile, Right side on desktop */}
                                    <div className="w-full md:w-2/3 space-y-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-slate-700">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                value={getUserName}
                                                readOnly

                                                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={getEmail}
                                                readOnly

                                                className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-4">
                                <label htmlFor="bio" className="block text-sm font-medium mb-2 text-slate-700">Bio</label>
                                <textarea
                                    id="bio"
                                    rows={4}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Write a short bio..."
                                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="domain" className="block text-sm font-medium mb-2 text-slate-700">Domain</label>
                                <select
                                    id="domain"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                    className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                                >
                                    <option value="" disabled>Select domain</option>
                                    <option value="design">Design</option>
                                    <option value="development">Development</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="research">Research</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="website" className="block text-sm font-medium mb-2 text-slate-700">Website</label>
                                <div className="relative">
                                    <Link className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        id="website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
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
                                        value={github}
                                        onChange={(e) => setGithub(e.target.value)}
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
                                        value={twitter}
                                        onChange={(e) => setTwitter(e.target.value)}
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
                                        value={linkedin}
                                        onChange={(e) => setLinkedin(e.target.value)}
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
                                        checked={emailNotifications}
                                        onChange={(e) => setEmailNotifications(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                </label>
                            </div>


                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-5 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                            >
                                {loading ? "Saving Changes..." : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
