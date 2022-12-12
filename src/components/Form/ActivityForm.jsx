import { useState } from "react"
import Modal from 'react-modal';
import logo from './pictures/logo.png'
const ActivityForm = ({ onAdd }) => {
    const [activityName, setActivityName] = useState('')
    const [activityType, setActivityType] = useState([])
    const [date, setDate] = useState([])
    const [duration, setDuration] = useState([])
    const [description, setDescription] = useState('')

    const [errorActName, setErrorActName] = useState('Please add activity name')
    const [errorActType, setErrorActType] = useState('Please select activity type')
    const [errorDate, setErrorDate] = useState('Please select date')
    const [errorDuration, setErrorDuration] = useState('Please add duration')
    const [errorDescription, setErrorDescription] = useState('Please add description')
    const validateForm = (e) => {
        
        if (!activityName) {
            alert(errorActName)
            return
        }
        

        onAdd({ activityName, activityType, date, duration, description })
        setActivityName('')
        setActivityType('')
        setDate('')
        setDuration('')
        setDescription('')


    }

    return (
        <div className="bg-white">
        
            <label htmlFor="my-modal" className="btn focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">Add Activity</label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  bg-white">

                <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <form onSubmit={validateForm} className="mb-0 space-y-6">

                            <div className="w-100">
                                <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                            </div>

                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Activity Form</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Activity Name</label>
                                <div className="mt-1">
                                    <input type="text" name="activityName" value={activityName} placeholder="Activity Name" onChange={(e) => setActivityName(e.target.value)} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                    <small>{errorActName}</small>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Type</label>

                                <div className="mt-1">
                                    <select name="activityType"  onChange={(e) => setActivityType(e.target.value)} className="select select-bordered w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" >
                                        <option disabled selected>Please select activity type</option>
                                        <option>Run</option>
                                        <option>Ride</option>
                                        <option>Walk</option>
                                        <option>Hike</option>
                                    </select>
                                    <small>{errorActType}</small>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Date</label>
                                <input type="date" placeholder="Select date" onChange={(e) => setDate(e.target.value)} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                <small>{errorDate}</small>
                            </div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Duration</label>
                                <div>
                                    <input type="text" value={duration} placeholder="Duration" onChange={(e) => setDuration(e.target.value)} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                    <small>{errorDuration}</small>
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start">Description</label>
                                <div>
                                    <input type="text" name="description" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500" />
                                    <small>{errorDescription}</small>
                                </div>

                            </div>

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

