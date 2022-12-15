import StatContainer from "../components/StatContainer/StatContainer";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import ActivityForm from "../components/Form/ActivityForm";


const Dashboard = () => {
    return (
        <div>
            <div className="h-screen">
                <ActivityCard />
                <div className="flex justify-around">
                    <StatContainer />
                    <StatContainer />
                    <StatContainer />
                    <ActivityForm />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
