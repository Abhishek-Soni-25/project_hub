export default function TipsAndGuidelines() {
    return (
        <>
            <div className="w-full lg:w-1/4">
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Tips & Guidelines</h3>

                    <div className="flex mb-4">
                        <div className="text-indigo-600 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Project Name</div>
                            <div className="text-sm text-gray-600">Choose a clear and descriptive name</div>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        <div className="text-indigo-600 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Description</div>
                            <div className="text-sm text-gray-600">Provide key details and objectives</div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="text-indigo-600 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium mb-1">Timeline</div>
                            <div className="text-sm text-gray-600">Set realistic start and due dates</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}