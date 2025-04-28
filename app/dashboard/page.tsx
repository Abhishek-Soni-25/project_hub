import Hsearch from "../_components/hsearch";
import Navbar from "../_components/navbar";
import RecentActivity from "../_components/recentActivity";

export default function Dashboard() {
    return (
        <>
            <Hsearch />
            <Navbar />
            <div className="flex p-7 bg-[#f8f9fc] justify-between">
                <h1>Dashboard</h1>
                <RecentActivity />
            </div>
        </>
    );
}
