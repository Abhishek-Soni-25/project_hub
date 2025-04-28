export default function Login() {
    return (
        <>
            <div className="flex min-h-screen bg-gray-900">
                {/* Left side - Image */}
                <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/mapping.png')" }}>
                    {/* This div is intentionally left empty to allow the background image to show */}
                </div>

                {/* Right side - Login Form */}
                <div className="md:w-1/3 lg:w-2/5 xl:w-1/3 bg-white p-8 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                        <p className="text-sm text-gray-500 mb-6">Log in to your account</p>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <a href="#" className="block text-right text-xs text-blue-600 hover:text-blue-500 mt-2">
                                Forgot Password?
                            </a>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium text-sm transition-colors mt-4 mb-6">
                            Log In
                        </button>

                        <div className="relative flex items-center mb-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-xs">Or continue with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 mb-6">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            GitHub
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Don`t have an account?{" "}
                            <a href="/signup" className="text-blue-600 font-medium hover:text-blue-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
