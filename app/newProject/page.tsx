'use client'

import { useState, useEffect, useRef, ChangeEvent, DragEvent } from "react";
import { Image as ImageIcon, FileText, CheckCircle, AlertTriangle, X } from 'lucide-react'
import Image from "next/image";

import Hsearch from "../_components/hsearch";
import TipsAndGuidelines from "../_components/tipsGuidelines";

export default function NewProject() {

    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const imageInputRef = useRef<HTMLInputElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

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

    const handleImageClick = () => {
        imageInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
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
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    setSelectedImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const validateFile = (file: File): { valid: boolean; message?: string } => {
        const maxSize = 25 * 1024 * 1024;
        const validTypes = [
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/msword',
            'application/vnd.ms-excel',
            'application/vnd.ms-powerpoint'
        ];

        if (file.size > maxSize) {
            return { valid: false, message: `${file.name} exceeds the 25MB limit` };
        }

        if (!validTypes.includes(file.type)) {
            return { valid: false, message: `${file.name} is not a supported file type` };
        }

        return { valid: true };
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const selectedFiles = Array.from(e.target.files);
        processFiles(selectedFiles);
    };

    const processFiles = (selectedFiles: File[]) => {
        setError(null);

        for (const file of selectedFiles) {
            const validation = validateFile(file);

            if (!validation.valid) {
                setError(validation.message ?? 'Invalid file');
                return;
            }

            setFiles(prevFiles => {
                const fileExists = prevFiles.some(f => f.name === file.name && f.size === file.size);
                if (fileExists) return prevFiles;
                return [...prevFiles, file];
            });
        }
    };

    const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        processFiles(droppedFiles);
    };

    const removeFile = (indexToRemove: number) => {
        setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };

    const getFileIcon = (fileType: string): string => {
        if (fileType.includes('pdf')) return '📄';
        if (fileType.includes('word')) return '📝';
        if (fileType.includes('sheet') || fileType.includes('excel')) return '📊';
        if (fileType.includes('presentation') || fileType.includes('powerpoint')) return '📽️';
        return '📎';
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B';
        else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        else return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };

    return (
        <>
            <Hsearch />
            <div className="bg-gray-100 min-h-screen">


                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-6 md:px-6 md:py-8 lg:py-10">
                    <div className="flex flex-col lg:flex-row">
                        {/* Main Content Area */}
                        <div className="w-full lg:w-3/4 lg:pr-6 mb-6 lg:mb-0">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Create New Project</h1>

                            {/* Project Details Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Project Details</h2>
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex-1 md:pr-6">
                                        <div className="mb-4">
                                            <label htmlFor="project-name" className="block font-medium text-gray-700 mb-2">Project Name</label>
                                            <input
                                                type="text"
                                                id="project-name"
                                                placeholder="Enter project name"
                                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                value={projectName}
                                                onChange={(e) => setProjectName(e.target.value)}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="description" className="block font-medium text-gray-700 mb-2">Description</label>
                                            <textarea
                                                id="description"
                                                placeholder="Describe your project"
                                                className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32 resize-y"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-6 md:mt-0 md:ml-6 lg:ml-10">
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
                                                    <ImageIcon size={24}/>
                                                </div>
                                            )}
                                        </div>

                                        <input
                                            type="file"
                                            ref={imageInputRef}
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                        />

                                        <p className="text-center mt-2 text-sm">
                                            {selectedImage ? 'Image Selected' : 'Upload Image'}
                                        </p>

                                        {selectedImage && (
                                            <button
                                                onClick={() => setSelectedImage(null)}
                                                className="mt-2 text-xs text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Documents Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Project Documents</h2>

                                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                    <div className="w-full">
                                        <div
                                            className={`w-full border border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors
          ${isDragging ? 'border-blue-500 bg-blue-50' : files.length > 0 ? 'border-green-500' : 'border-gray-300 hover:border-blue-500'}`}
                                            onClick={handleFileClick}
                                            onDragOver={handleDragOver}
                                            onDragLeave={handleDragLeave}
                                            onDrop={handleFileDrop}
                                        >
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                                <FileText size={24} />
                                            </div>
                                            <div className="text-gray-800 font-medium mb-2">Upload project documents</div>
                                            <div className="text-xs text-gray-500">PDF, DOCX, XLSX, PPT (Max 25MB)</div>

                                            {files.length > 0 && (
                                                <div className="mt-4 flex items-center">
                                                    <CheckCircle size={16} className="text-green-500 mr-2" />
                                                    <span className="text-sm text-green-600">{files.length} file(s) selected</span>
                                                </div>
                                            )}

                                            {error && (
                                                <div className="mt-4 flex items-center text-red-500">
                                                    <AlertTriangle size={16} className="mr-2" />
                                                    <span className="text-sm">{error}</span>
                                                </div>
                                            )}
                                        </div>

                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            accept=".pdf,.docx,.xlsx,.ppt,.pptx,.doc,.xls"
                                            className="hidden"
                                            multiple
                                        />

                                        {files.length > 0 && (
                                            <div className="mt-4 border rounded-md divide-y">
                                                {files.map((file, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3">
                                                        <div className="flex items-center">
                                                            <span className="mr-2 text-xl">{getFileIcon(file.type)}</span>
                                                            <div>
                                                                <p className="text-sm font-medium text-gray-700 truncate max-w-xs">{file.name}</p>
                                                                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeFile(index);
                                                            }}
                                                            className="p-1 hover:bg-gray-100 rounded-full"
                                                        >
                                                            <X size={16} className="text-gray-500" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>


                                </div>
                            </div>

                            {/* Team Members Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Team Members</h2>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Search team members"
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                                        <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs mr-2">JD</div>
                                        <span className="text-sm">John Doe</span>
                                    </div>

                                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                                        <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs mr-2">SS</div>
                                        <span className="text-sm">Sarah Smith</span>
                                    </div>

                                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                                        <div className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center text-xs mr-2">MJ</div>
                                        <span className="text-sm">Mike Johnson</span>
                                    </div>

                                    <button className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                        <span className="ml-1 text-sm">Add Member</span>
                                    </button>
                                </div>
                            </div>

                            {/* Project Settings Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Project Settings</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label htmlFor="start-date" className="block font-medium text-gray-700 mb-2">Start Date</label>
                                        <input
                                            type="date"
                                            id="start-date"
                                            placeholder="Select date"
                                            className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="due-date" className="block font-medium text-gray-700 mb-2">Due Date</label>
                                        <input
                                            type="date"
                                            id="due-date"
                                            placeholder="Select date"
                                            className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="category" className="block font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        id="category"
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled>Select category</option>
                                        <option value="design">Design</option>
                                        <option value="development">Development</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="research">Research</option>
                                    </select>
                                </div>
                            </div>

                            {/* Project Visibility Card */}
                            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-6">Project Visibility</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-gray-300 rounded-md p-4 cursor-pointer hover:border-indigo-600 transition-colors">
                                        <div className="mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                            </svg>
                                        </div>
                                        <div className="font-medium mb-1">Public</div>
                                        <div className="text-xs text-gray-600">Anyone can view this project</div>
                                    </div>

                                    <div className="border border-gray-300 rounded-md p-4 cursor-pointer hover:border-indigo-600 transition-colors">
                                        <div className="mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </svg>
                                        </div>
                                        <div className="font-medium mb-1">Private</div>
                                        <div className="text-xs text-gray-600">Only team members can access</div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-4 mb-8">
                                <button className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                    Cancel
                                </button>
                                <button className="px-4 py-2 md:px-6 md:py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors">
                                    Create Project
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        {!isMobile && (
                            <TipsAndGuidelines />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}