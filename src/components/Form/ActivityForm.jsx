import { useState } from "react"
import logo from './pictures/logo.png'
const ActivityForm = ({ onAdd }) => {
    const [activityName, setActivityName] = useState("")
    const [activityType, setActivityType] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [duration, setDuration] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null);

    const handleActivityNameChange = (e) => {
        setActivityName(e.target.value);
    };
    const handleActivityTypeChange = (e) => {
        setActivityType(e.target.value);
    };
    const handleStartChange = (e) => {
        setStart(e.target.value);
    };
    const handleEndChange = (e) => {
        setEnd(e.target.value);
    };
    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !activityName ||
            !activityType ||
            !start ||
            !end ||
            !duration ||
            !description
        ) {
            setError("All fields are required");
            return;
        }

        // reset
        setActivityName('')
        setActivityType('')
        setStart('')
        setEnd('')
        setDuration('')
        setDescription('')

    }
    

    return (
        <div className="bg-white">
        
            <label htmlFor="my-modal" 
                   className="btn focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">Add Activity</label>

            <input type="checkbox" 
                   id="my-modal" 
                   className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  bg-white">

                <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit} className="mb-0 space-y-6">

                            <div className="w-100">
                                <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                            </div>

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Activity Form</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Activity Name</label>
                                <div className="mt-1">
                                    <input type="text" name="activityName" value={activityName} placeholder="Activity Name" onChange={handleActivityNameChange} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />

                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Type</label>

                                <div className="mt-1">
                                    <select name="activityType"  
                                            onChange={handleActivityTypeChange} 
                                            value={activityType}
                                            className="select select-bordered w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" >
                                        <option disabled selected value="">Please select activity type</option>
                                        <option value="run">Run</option>
                                        <option value="ride">Ride</option>
                                        <option value="walk">Walk</option>
                                        <option value="hike">Hike</option>
                                    </select>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Start</label>
                                <input type="datetime-local" placeholder="Select date" value={start} onChange={handleStartChange} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">End</label>
                                <input type="datetime-local" placeholder="Select date" value={end} onChange={handleEndChange} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                            </div>


                            <div>
                                <label className="flex text-sm font-medium text-gray-700 text-start">Duration</label>
                                <div>
                                    <input type="number" value={duration} placeholder="Duration" onChange={handleDurationChange} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Description</label>
                                <div>
                                    <input type="text" name="description" value={description} placeholder="Description" onChange={handleDescriptionChange} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                </div>

                            </div>
                            {error && <p className="py-4 text-red-600 ">{error}</p>}
                            <div>
                                <button className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">Add Activity</button>
                            </div>

                        </form>
                    </div>


                    <div className="modal-action">
                        <label htmlFor="my-modal" className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">Close</label>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default ActivityForm

