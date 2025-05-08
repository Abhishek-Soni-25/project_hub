import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white py-6 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-2">
                        <Image 
                            width={50}
                            height={50}
                            className="h-6 w-6 sm:h-8 sm:w-8 mr-2" 
                            src="/logo.png" 
                            alt="logo" 
                        />
                        <div className="text-lg sm:text-xl font-bold">Project_Hub</div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400">Making project management easier and more efficient for developers worldwide.</p>
                </div>
            </footer>
        </>
    );
}