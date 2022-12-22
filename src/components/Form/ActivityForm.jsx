import { useEffect, useState } from "react";
import logo from "./pictures/logo.png";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";

const ActivityForm = () => {
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

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [move, setMove] = useState(null);

    const handleActivityInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({ name, value });
    };

    useEffect(() => {
        // console.log(`Input ${startDate} ${endDate}`);
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

        if (isEditing) {
            editActivity();
            setMove(true);
            return;
        }
        createActivity();

        setError(null);
    };

    // Relocate after adding card
    useEffect(() => {
        if (move) {
            setTimeout(() => {
                navigate("/");
                window.location.reload("/");
            }, 3000);
        }
    }, [move, navigate]);

    // Check User's Token for permission
    if (!token) {
        return navigate("/");
    }

    return (
        <div className="bg-transparent fixed z-10 bottom-8 right-4">
            <label
                htmlFor="my-modal"
                className="btn focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400"
            >
                Add
            </label>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  bg-white">
                    <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
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
                                    {isEditing
                                        ? "Edit Activity Form"
                                        : "Add Activity Form"}
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
                                        className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400"
                                    >
                                        {isEditing
                                            ? "Edit Activity"
                                            : "Add Activity"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="modal-action">
                            <label
                                htmlFor="my-modal"
                                className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400"
                            >
                                Close
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityForm;
