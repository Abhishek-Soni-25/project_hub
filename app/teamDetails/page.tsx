'use client'

import React, { useState } from 'react';
import { MoreHorizontal, ChevronRight, Users, GitBranch, TrendingUp } from 'lucide-react';
import Image from 'next/image';

import Hsearch from '../_components/hsearch';

export default function TeamDetails() {

    const [activeTab, setActiveTab] = useState('overview');

    const projectCards = [
        { title: 'Platform Redesign', progress: 75, dueDate: 'Dec 20', priority: 'High' },
        { title: 'API Integration', progress: 45, dueDate: 'Jan 15', priority: 'Medium' },
        { title: 'Mobile App', progress: 90, dueDate: 'Dec 10', priority: 'High' },
    ];

    const teamMembers = [
        { name: 'Alex Morgan', role: 'Team Lead', online: true, avatar: '/logo.png' },
        { name: 'Sarah Chen', role: 'Senior Developer', online: true, avatar: '/logo.png' },
        { name: 'James Wilson', role: 'Backend Developer', online: false, avatar: '/logo.png' },
    ];

    const renderPriorityBadge = (priority: string) => {
        const colorClass = priority === 'High' ? 'text-red-500' : 'text-yellow-500';
        return <span className={colorClass}>{priority}</span>;
    };

    return (
        <>
            <Hsearch />
            <div className="min-h-screen flex flex-col bg-white">

                {/* Team Header */}
                <div className="bg-white shadow">
                    <div className="mx-auto px-4 sm:px-6  py-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                <Image src="/api/placeholder/64/64" alt="Team" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Development Team</h1>
                                <p className="text-gray-600 mt-1">
                                    A cross-functional team of software engineers and developers working on our core products and features.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <Users className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold">24</div>
                                    <div className="text-gray-500 text-sm">Members</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <GitBranch className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold">12</div>
                                    <div className="text-gray-500 text-sm">Projects</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <TrendingUp className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-2xl font-semibold">89%</div>
                                    <div className="text-gray-500 text-sm">Completion</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`${activeTab === 'overview'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('projects')}
                                    className={`${activeTab === 'projects'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => setActiveTab('members')}
                                    className={`${activeTab === 'members'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Members
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row'>
                    {/* Main Content */}
                    <div className="flex-grow bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {activeTab === 'overview' && (
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">About</h2>
                                    <p className="mt-2 text-gray-600">
                                        Our development team is responsible for building and maintaining the core products that power our platform.
                                        We work across the full stack, from frontend to backend, and collaborate closely with design and product teams
                                        to deliver high-quality software solutions.
                                    </p>

                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-medium text-gray-900">Current Projects</h2>
                                            <a href="#" className="text-blue-600 hover:text-blue-500 flex items-center text-sm font-medium">
                                                View all <ChevronRight className="ml-1 h-4 w-4" />
                                            </a>
                                        </div>

                                        <div className="mt-4 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                            {projectCards.map((project, idx) => (
                                                <div key={idx} className="bg-white overflow-hidden border border-gray-200 rounded-lg">
                                                    <div className="px-4 py-5 sm:p-6">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
                                                            <button className="text-gray-400 hover:text-gray-500">
                                                                <MoreHorizontal className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                        <div className="mt-4">
                                                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                                                <span>Progress</span>
                                                                <span>{project.progress}%</span>
                                                            </div>
                                                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                                                <div
                                                                    style={{ width: `${project.progress}%` }}
                                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between text-sm">
                                                            <div className="text-gray-500">Due {project.dueDate}</div>
                                                            <div>{renderPriorityBadge(project.priority)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 mt-6 w-80 h-max">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Members</h3>
                        <div className="space-y-3">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0">
                                        <Image
                                            src={member.avatar}
                                            alt=""
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800">{member.name}</div>
                                        <div className="text-xs text-gray-500">{member.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button className="w-full flex justify-center items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
                                View All Members
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}