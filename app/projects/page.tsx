import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import RecentActivity from "../_components/recentActivity";
import ActiveMembers from "../_components/activeMembers";

export default function Projects() {
    return (
        <>
            <Hsearch />
            <Navbar />
            <div className="flex p-7 bg-[#f8f9fc] justify-between">
                <h1>Projects</h1>
                <div>
                    <RecentActivity />
                    <ActiveMembers />
                </div>
            </div>
        </>
    );
}
