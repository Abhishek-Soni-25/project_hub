'use client'

import Hsearch from "../_components/hsearch"

import { useState } from "react";

export default function AddTeam() {

    const [teamName, setTeamName] = useState('');
    const [teamDescription, setTeamDescription] = useState('');
    const [searchMembers, setSearchMembers] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ teamName, teamDescription, searchMembers });
    };

    return (
        <>
            <Hsearch />
            <div className="min-h-screen bg-gray-100">

                <div className="max-w-xl mx-auto py-5 px-4">
                    <div className="mb-5">
                        <h2 className="text-2xl font-semibold mb-1">Create New Team</h2>
                        <p className="text-sm text-gray-500">Set up your team's workspace</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="team-name" className="block text-sm font-medium mb-2">
                                Team Name
                            </label>
                            <input
                                type="text"
                                id="team-name"
                                placeholder="Enter team name"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                            />
                            <div className="text-xs text-gray-500 mt-1">This will be your team's display name</div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="team-description" className="block text-sm font-medium mb-2">
                                Description (Optional)
                            </label>
                            <textarea
                                id="team-description"
                                placeholder="Describe what this team does"
                                value={teamDescription}
                                onChange={(e) => setTeamDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm min-h-20 resize-y"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                                Add Team Members
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search by name or email"
                                    value={searchMembers}
                                    onChange={(e) => setSearchMembers(e.target.value)}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium rounded-md text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white"
                            >
                                Create Team
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}