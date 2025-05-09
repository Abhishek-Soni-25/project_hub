'use client'

import Hsearch from "../_components/hsearch";

import { useState, useEffect } from "react";

// Mock data for demonstration
const documents = [
    { id: 1, name: 'Project Brief.pdf', type: 'PDF', size: '2.4 MB', updatedAt: '2 days ago' },
    { id: 2, name: 'Design System.fig', type: 'Figma', size: '8.1 MB', updatedAt: '5 days ago' },
    { id: 3, name: 'Technical Specs.docx', type: 'Word', size: '1.2 MB', updatedAt: '1 week ago' }
];

const activities = [
    { id: 1, user: 'Sarah Johnson', action: 'updated the project status', time: '2 hours ago' },
    { id: 2, user: 'Michael Chen', action: 'uploaded new design files', time: '5 hours ago' },
    { id: 3, user: 'Emily Davis', action: 'completed the frontend implementation', time: '1 day ago' },
    { id: 4, user: 'James Wilson', action: 'added new test cases', time: '2 days ago' }
];

const teamMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'Project Lead' },
    { id: 2, name: 'Michael Chen', role: 'UI Designer' },
    { id: 3, name: 'Emily Davis', role: 'Developer' },
    { id: 4, name: 'Alex Turner', role: 'QA Engineer' }
];

const projectDetails = {
    name: 'E-Commerce Platform Redesign',
    startDate: 'Jan 15, 2024',
    dueDate: 'Mar 30, 2024',
    status: 'In Progress',
    progress: 65,
    daysRemaining: 75,
    category: 'Web Development',
    visibility: 'Public',
    createdBy: 'Sarah Johnson',
    description: 'A complete redesign of our e-commerce platform focusing on improving user experience and conversion rates. The project includes new features like personalized recommendations, improved search functionality, and a streamlined checkout process.',
    objectives: [
        'Increase conversion rate by 25%',
        'Reduce cart abandonment rate',
        'Improve mobile user experience',
        'Implement new branding guidelines'
    ]
};

// Component for the document list (Image 1 & part of Image 2)
const DocumentList = () => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Project Documents</h2>
            <div className="space-y-4">
                {documents.map(doc => (
                    <div key={doc.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <div className="flex items-center">
                            <div className="text-gray-500 mr-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">{doc.name}</p>
                                <p className="text-sm text-gray-500">{doc.type} • {doc.size}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-3">{doc.updatedAt}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for recent activities (Image 1)
const RecentActivities = () => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
                {activities.map(activity => (
                    <div key={activity.id} className="flex py-3 border-b border-gray-100">
                        <div className="flex-shrink-0 mr-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span className="text-blue-500 font-medium">{activity.user}</span> {activity.action}
                            </p>
                            <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for project about section (Image 2)
const AboutProject = () => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">About Project</h2>
            <p className="text-gray-700 mb-4">
                {projectDetails.description}
            </p>
            <div>
                <h3 className="font-medium mb-2">Key Objectives:</h3>
                <ul className="list-none space-y-1">
                    {projectDetails.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{objective}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Component for project team (Image 2)
const ProjectTeam = () => {
    return (
        <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Project Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map(member => (
                    <div key={member.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                            <div>
                                <p className="font-medium">{member.name}</p>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for project details sidebar (Image 3)
const ProjectDetailsSidebar = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Project Status</h3>
                <div className="mb-2 flex justify-between items-center">
                    <span className="text-green-500 font-medium">In Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${projectDetails.progress}%` }}></div>
                </div>
                <p className="text-gray-700">{projectDetails.progress}% Completed</p>
                <div className="mt-4 flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{projectDetails.daysRemaining} days remaining</span>
                </div>
            </div>

            <div className="bg-white rounded-lg p-5">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">Category</span>
                            <p className="font-medium">{projectDetails.category}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">Visibility</span>
                            <p className="font-medium">{projectDetails.visibility}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500">Created by</span>
                            <p className="font-medium">{projectDetails.createdBy}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProjectDetails() {

    const [activeView, setActiveView] = useState('dashboard');
    const [isMobile, setIsMobile] = useState(false);

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // Consider below 768px as mobile
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    // Unified view for desktop that shows all content
    const UnifiedDesktopView = () => (
        <div className="max-w-7xl mx-auto py-6 px-4">
            {/* Project header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold">{projectDetails.name}</h1>
                    <div className="bg-blue-200 text-blue-700 px-3 py-1 rounded-2xl text-sm font-medium">
                        Public
                    </div>
                </div>
                <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="mr-4">Started: {projectDetails.startDate}</span>
                    <span>Due: {projectDetails.dueDate}</span>
                </div>
            </div>

            {/* Project content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main content - 2/3 width */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Project image */}
                    <div className="bg-white rounded-lg overflow-hidden">
                        <img
                            src="/laptop.png"
                            alt="Project dashboard"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* About section */}
                    <AboutProject />

                    {/* Team section */}
                    <ProjectTeam />

                    {/* Documents section */}
                    <DocumentList />

                    {/* Activities section */}
                    <RecentActivities />
                </div>

                {/* Sidebar - 1/3 width */}
                <div className="lg:col-span-1">
                    <ProjectDetailsSidebar />
                </div>
            </div>
        </div>
    );

    // Dynamically display content based on active view (for mobile)
    const renderMobileView = () => {
        switch (activeView) {
            case 'dashboard':
                return (
                    <div className="max-w-7xl mx-auto py-6 px-4">
                        {/* Project header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h1 className="text-3xl font-bold">{projectDetails.name}</h1>
                                <div className="bg-blue-200 text-blue-700 px-3 py-1 rounded-2xl text-sm font-medium">
                                    Public
                                </div>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="mr-4">Started: {projectDetails.startDate}</span>
                                <span>Due: {projectDetails.dueDate}</span>
                            </div>
                        </div>

                        {/* Project image */}
                        <div className="bg-white rounded-lg overflow-hidden mb-6">
                            <img
                                src="/laptop.png"
                                alt="Project dashboard"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* About section */}
                        <AboutProject />

                        {/* Status section */}
                        <div className="bg-white rounded-lg p-5 mb-6">
                            <h3 className="text-lg font-medium mb-3">Project Status</h3>
                            <div className="mb-2 flex justify-between items-center">
                                <span className="text-green-500 font-medium">In Progress</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${projectDetails.progress}%` }}></div>
                            </div>
                            <p className="text-gray-700">{projectDetails.progress}% Completed</p>
                        </div>
                    </div>
                );
            case 'documents':
                return (
                    <div className="min-h-screen bg-gray-100 p-6">
                        <DocumentList />
                    </div>
                );
            case 'details':
                return (
                    <div className="min-h-screen bg-gray-100 p-6">
                        <ProjectTeam />
                        <RecentActivities />
                    </div>
                );
            default:
                return <UnifiedDesktopView />;
        }
    };

    return (
        <>
            <Hsearch />
            <div className="min-h-screen bg-gray-100">
                {isMobile ? renderMobileView() : <UnifiedDesktopView />}

                {/* Demo controls - only visible on mobile */}
                {isMobile && (
                    <div className="fixed bottom-4 right-4 bg-white p-2 rounded-md shadow-lg">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveView('dashboard')}
                                className={`px-3 py-1 rounded ${activeView === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveView('documents')}
                                className={`px-3 py-1 rounded ${activeView === 'documents' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Documents
                            </button>
                            <button
                                onClick={() => setActiveView('details')}
                                className={`px-3 py-1 rounded ${activeView === 'details' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                Details
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}