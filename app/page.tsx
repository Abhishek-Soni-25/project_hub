"use client"

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react"

import Header from "./_components/header";
import Footer from "./_components/footer";
import GitHubButton from "./_components/githubButton";
import { useUser } from "./_context/UserContext";

export default function Home() {
  const {data: session} = useSession();
  const { user } = useUser()

  const handleGithubAction = async () => {

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/github`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ session, user }),
    })

  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <header className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="max-w-lg mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Track Your Projects with Precision</h1>
              <p className="text-lg text-gray-600 mb-6">Streamline your development workflow with powerful project tracking and collaboration tools</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-md transition-colors hover:bg-blue-700 w-full sm:w-auto text-center">
                  Get Started - It's Free
                </Link>
                <div className="w-full sm:w-auto" onClick={handleGithubAction}>
                  <GitHubButton text="Continue with Github" />
                </div>
              </div>
            </div>
            <div className="mx-auto md:mx-0">
              <Image
                width={500}
                height={500}
                src="/laptop.png"
                alt="Project Dashboard"
                className="max-w-full md:max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 sm:col-span-2 md:col-span-1">
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