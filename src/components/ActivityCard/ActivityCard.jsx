import runningPic from "./pictures/runningPic.png";
import { useAppContext } from "../../context/appContext";

const ActivityCard = () => {
    const {
        activityName,
        startDate,
        duration,
        description,
        activities,
        totalActivities,
        numOfPage,
    } = useAppContext();
    
    const data = [
        { id: 1, activity: "Running" },
        { id: 2, activity: "Swimming" },
        { id: 3, activity: "Hiking" },
        { id: 4, activity: "Dancing" },
        { id: 5, activity: "Biking" },
        { id: 6, activity: "Biking" },
    ];

    return (
        <div className="flex overflow-auto pt-24">
            {activities.map((activity) => (
                <div
                    className="card min-w-[14rem] bg-base-100 shadow-xl m-8"
                    key={activity._id}
                >
                    <figure>
                        <img
                            src={runningPic}
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{activity.activityName}</h2>
                        <p>Type: {activity.activityType}</p>
                        <p>Duration: {activity.duration}</p>
                
                        <div className="card-actions">
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityCard;
