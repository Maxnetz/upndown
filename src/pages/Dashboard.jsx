// import { useEffect } from "react";

import StatContainer from "../components/StatContainer/StatContainer";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import ActivityForm from "../components/Form/ActivityForm";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Dashboard = () => {
    const { token } = useAppContext();

    if (!token) {
        console.log(token);
        return <Navigate to="/" />;
    }

    return (
        <div>
            <div className="h-screen bg-purple-200">
                <ActivityCard />
                <div className="flex justify-around">
                    <StatContainer />
                </div>
                <div className="flex justify-end mx-4">
                <ActivityForm />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
