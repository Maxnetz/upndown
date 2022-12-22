import runningPic from "./pictures/runningPic.png";
import walkingPic from "./pictures/walkingPic.png";
import hikingPic from "./pictures/hikingPic.png";
import swimmingPic from "./pictures/swimmingPic.png";
import riddingPic from "./pictures/riddingPic.png";
import { useAppContext } from "../../context/appContext";
import EditActivityForm from "../Form/EditActivityForm.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const ActivityCard = () => {
    const { isEditing, activities, deleteActivity, setEditActivity } =
        useAppContext();

    const CardImg = {
        Riding: runningPic,
        Walking: walkingPic,
        Running: riddingPic,
        Swimming: swimmingPic,
        Hiking: hikingPic,
    };

    const [editAct, setEditAct] = useState("");
    
    return (
        <div className="flex overflow-auto pt-24">
            {activities.slice(0).reverse().map((activity) => {
               
                return(
                <div
                    className="card min-w-[16rem] bg-base-100 shadow-xl m-8"
                    key={activity._id}
                >
                    <figure>
                        <img
                            src={CardImg[activity.activityType]}
                            alt="Exercise-activity"
                            className="rounded-xl w-80"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{activity.activityName}</h2>
                        <p>Type: {activity.activityType}</p>
                        <p>Duration: {activity.duration}</p>

                        <div className="card-actions">
                            <Link
                                to="/editActivity"
                                className="text-center focus:outline-none text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 text-black dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 "
                                onClick={() => setEditActivity(activity._id)}
                            >
                                Edit
                            </Link>
                            <button
                                className="text-center focus:outline-none text-black bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-800 dark:focus:ring-yellow-400"
                                onClick={() => deleteActivity(activity._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        )}
        </div>
    );
};

export default ActivityCard;
