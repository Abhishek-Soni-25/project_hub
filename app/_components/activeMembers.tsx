import Image from "next/image";

export default function ActiveMembers() {

    const members = [
        {
            name: "Sarah Chen",
            role: "Lead Developer",
            avatar: "/placeholder-avatar.png"
        },
        {
            name: "Alex Kim",
            role: "Backend Engineer",
            avatar: "/placeholder-avatar.png"
        },
        {
            name: "Taylor Johnson",
            role: "UX Designer",
            avatar: "/placeholder-avatar.png"
        },
        {
            name: "James Wilson",
            role: "DevOps Engineer",
            avatar: "/placeholder-avatar.png"
        },
        {
            name: "Mia Rodriguez",
            role: "Front-end Developer",
            avatar: "/placeholder-avatar.png"
        }
    ];

    return (
        <>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 mt-6 w-80">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Members</h3>
                <div className="space-y-3">
                    {members.map((member, index) => (
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
            </div>
        </>
    )
}