import StatContainer from "../components/StatContainer/StatContainer";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import NavBar from "../components/NavBar/NavBar"

const Dashboard = () => {
    return (
        <div className="bg-purple-200">
            <NavBar />
            <ActivityCard />
            <div className="flex justify-around">
                <StatContainer />
                <StatContainer />
                <StatContainer />
            </div>
        </div>
    )
}
export default Dashboard;