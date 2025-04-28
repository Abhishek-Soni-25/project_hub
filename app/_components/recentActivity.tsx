import React from "react";

// Activity item type definition
type ActivityItem = {
  user: string;
  action: string;
  target?: string;
};

// Component props
interface RecentActivityProps {
  activities?: ActivityItem[];
}

export default function RecentActivity({
    activities = [
        { user: "Sarah Chen", action: "committed to", target: "E-commerce Platform" },
        { user: "Alex Kim", action: "created", target: "Mobile App Backend" },
        { user: "Taylor Johnson", action: "opened a pull request" },
        { user: "James Wilson", action: "deployed AI Chatbot to production" },
        { user: "Mia Rodriguez", action: "resolved 3 issues in", target: "CRM System" }
      ],
}: RecentActivityProps) {
    return (
        <>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 w-80">
                <h3 className="font-semibold text-base mb-4 text-slate-800">Recent Activity</h3>
                <div className="mb-4">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={`py-2 text-sm text-slate-500 ${index !== activities.length - 1 ? "border-b border-slate-100" : ""
                                }`}
                        >
                            <span className="text-blue-500 font-medium">{activity.user}</span>{" "}
                            {activity.action}{" "}
                            {activity.target && (
                                <span>{activity.target}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}
