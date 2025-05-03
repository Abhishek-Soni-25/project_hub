import Image from "next/image";
// import { auth , signIn} from "../auth";

import GitHubButton from "./githubButton";

export default async function Header() {

    // const session = await auth()

    return (
        <>
            <nav className="bg-gray-900 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Image 
                            width={50}
                            height={50}
                            className="h-10 w-10 mr-2" src="/logo.png" alt="Logo" />
                            <span className="text-white text-2xl font-bold">Project_Hub</span>
                        </div>
                        <div className="flex items-center">
                            <ul className="flex space-x-4 items-center">
                                <li>
                                    <a href="/signup" className="text-white hover:text-gray-300 font-semibold px-4 py-2 transition-colors">
                                        Signup
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="text-white hover:text-gray-300 font-semibold px-4 py-2 transition-colors">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <GitHubButton text="Github"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
