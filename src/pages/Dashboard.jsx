import StatContainer from "../components/StatContainer/StatContainer";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import NavBar from "../components/NavBar/NavBar"

const Dashboard = () => {
    return (
        <div className=" " >
            <NavBar />
            <div className="h-screen">
                <ActivityCard />
                <div className="flex justify-around">
                    <StatContainer />
                    <StatContainer />
                    <StatContainer />
                </div>
            </div>
        </div>
        
    )
}
export default Dashboard;