import { useEffect } from "react";

import StatContainer from "../components/StatContainer/StatContainer";
import ActivityCard from "../components/ActivityCard/ActivityCard";
import ActivityForm from "../components/Form/ActivityForm";

const Dashboard = () => {
    const fetchData = async () => {
        try {
            const response = await fetch("/api/v1");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
