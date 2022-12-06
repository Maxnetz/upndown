import { useState } from "react"

const ActivityForm = ({onAdd}) => {
    const [activityName, setActivityName] = useState('')
    const [activityType, setActivityType] = useState([])
    const [duration, setDuration] = useState([])
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(activityName, activityType, description)
        

        if (!activityName) {
            alert('Please add a task')
            return 
        }

        onAdd({activityName, activityType, duration, description})
        setActivityName('')
        setActivityType('')
        setDuration('')
        setDescription('')
    }

    return (
        <div className="lg flex justify-center">
            <form onSubmit={onSubmit}>
                <input type="text" name="activityName" value={activityName} placeholder="Activity Name" onChange={(e) => setActivityName(e.target.value)}  className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>

                <select name="activityType" value={activityType} onChange={(e) => setActivityType(e.target.value)} className="select select-bordered w-full max-w-xs" >
                    <option disabled selected>Please select activity type</option>
                    <option>Run</option>
                    <option>Ride</option>
                    <option>Walk</option>
                    <option>Hike</option>
                </select>

                <input type="text" value={duration} placeholder="Duration" onChange={(e) => setDuration(e.target.value)} className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>

                <input type="text" name="description" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} className ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default ActivityForm