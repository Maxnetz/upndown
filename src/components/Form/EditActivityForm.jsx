import { useEffect, useState } from "react";
import logo from "./pictures/logo.png";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

import Alert from "../Alert/Alert";

const EditActivityForm = () => {
    const {
        token,
        isLoading,
        isEditing,
        showAlert,
        displayAlert,
        activityName,
        activityType,
        activityTypeOption,
        startDate,
        endDate,
        duration,
        description,
        handleChange,
        clearValues,
        createActivity,
        editActivity,
    } = useAppContext();

    const [error, setError] = useState(null);
    const [move, setMove] = useState(null);
    const navigate = useNavigate();

    const handleActivityInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value });
        console.log(startDate);
    };

    useEffect(() => {
        const tempStartDate = new Date(startDate);
        const tempEndDate = new Date(endDate);
        const name = "duration";

        const timeDiff = Math.abs(tempEndDate - tempStartDate);

        const diffHours = Math.floor(timeDiff / (1000 * 3600));

        const diffMinutes = Math.floor(
            (timeDiff % (1000 * 3600)) / (1000 * 60)
        );

        const diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const formattedTimeDifference = `${diffHours
            .toString()
            .padStart(2, "0")}:${diffMinutes
            .toString()
            .padStart(2, "0")}:${diffSeconds.toString().padStart(2, "0")}`;

        const value = formattedTimeDifference.toString();

        handleChange({ name, value });
    }, [startDate, endDate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !activityName ||
            !activityType ||
            !startDate ||
            !endDate ||
            !duration ||
            !description ||
            activityType === ""
        ) {
            setError("All fields are required");
            displayAlert();
            return;
        }
        editActivity();
        setMove(true);
    };

    useEffect(() => {
        if (move) {
          setTimeout(() => {
            navigate('/dashboard');
            setMove(false);
            return window.location.assign('/dashboard')
          }, 3000);
        }
      }, [move, navigate]);

      if (!token) {
        return navigate("/");
    }


    return (
        <div className="w-full pt-24 bg-purple-200 h-screen">
          
  
                    <div className=" mt-24 sm:mx-auto sm:w-full sm:max-w-md flex justify-center ">
                        <div className="bg-white rounded-lg w-4/12 px-8  md:w-5/12 md:px-16 sm:w-5/6 xs:px-2 xs:w-5/6">
                            <form
                                onSubmit={handleSubmit}
                                className="mb-0 space-y-6"
                            >
                                <div className="w-100">
                                    <img
                                        className="mx-auto h-12 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>

                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                EDIT
                                </h2>

                                {showAlert && <Alert />}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-start">
                                        Activity Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="activityName"
                                            value={activityName}
                                            placeholder="Activity Name"
                                            onChange={handleActivityInput}
                                            className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-start">
                                        Type
                                    </label>

                                    <div className="mt-1">
                                        <select
                                            name="activityType"
                                            onChange={handleActivityInput}
                                            value={activityType}
                                            className="select select-bordered w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                        >
                                            {activityTypeOption.map(
                                                (itemValue, index) => {
                                                    return (
                                                        <option
                                                            key={index}
                                                            value={itemValue}
                                                        >
                                                            {itemValue}
                                                        </option>
                                                    );
                                                }
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-start">
                                        Start
                                    </label>
                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        placeholder="Select date"
                                        value={startDate}
                                        onChange={handleActivityInput}
                                        className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-start">
                                        End
                                    </label>
                                    <input
                                        type="datetime-local"
                                        placeholder="Select date"
                                        name="endDate"
                                        value={endDate}
                                        onChange={handleActivityInput}
                                        className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label className="flex text-sm font-medium text-gray-700 text-start">
                                        Duration
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            value={duration}
                                            name="duration"
                                            placeholder="Duration"
                                            onChange={handleActivityInput}
                                            disabled
                                            className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 text-start">
                                        Description
                                    </label>
                                    <div>
                                        <input
                                            type="text"
                                            name="description"
                                            value={description}
                                            placeholder="Description"
                                            onChange={handleActivityInput}
                                            className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                                {error && (
                                    <p className="py-4 text-red-600 ">
                                        {error}
                                    </p>
                                )}
                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="w-full focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>

                        
                    </div>
                </div>
    
    );
};

export default EditActivityForm;
