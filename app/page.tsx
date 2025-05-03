import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
                <Header />
    
                {/* Hero Section */}
                <header className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Projects with Precision</h1>
                            <p className="text-lg text-gray-600 mb-6">Streamline your development workflow with powerful project tracking and collaboration tools</p>
                            <div className="flex flex-wrap gap-4">
                                <a href="/signup" className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-md transition-colors hover:bg-blue-700">
                                    Get Started - It`s Free
                                </a>
                                <a href="#" className="bg-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-md transition-colors hover:bg-gray-300">
                                    Continue with GitHub
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img src="/laptop.png" alt="Project Dashboard" className="max-w-md rounded-lg" />
                        </div>
                    </div>
                </header>
    
                {/* Features Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                                <i className="fas fa-chart-line text-blue-600 text-2xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Tracking</h3>
                                <p className="text-gray-700">Monitor project progress and team performance in real-time with interactive dashboards</p>
                            </div>
    
                            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                                <i className="fas fa-user-group text-blue-600 text-2xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
                                <p className="text-gray-700">Seamlessly collaborate with team members, assign tasks, and share updates</p>
                            </div>
    
                            <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
                                <i className="fab fa-github text-blue-600 text-2xl mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">GitHub Integration</h3>
                                <p className="text-gray-700">Connect your GitHub repositories and track development progress directly</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </>
  );
}
