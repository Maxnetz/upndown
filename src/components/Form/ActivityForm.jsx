import { useState } from "react"

const ActivityForm = ({ onAdd }) => {
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

        onAdd({ activityName, activityType, duration, description })
        setActivityName('')
        setActivityType('')
        setDuration('')
        setDescription('')
    }

    return (
        <div className="lg flex justify-center px-4 py-4">
            <form onSubmit={onSubmit}>
                Add Activity Form
                <div className="px-4 py-4">
                    <label>Activity Name</label>
                    <br />
                    <input type="text" name="activityName" value={activityName} placeholder="Activity Name" onChange={(e) => setActivityName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="px-4 py-4">
                    <label>Type</label><br />
                    <select name="activityType" value={activityType} onChange={(e) => setActivityType(e.target.value)} className="select select-bordered w-full max-w-xs" >
                        <option disabled selected>Please select activity type</option>
                        <option>Run</option>
                        <option>Ride</option>
                        <option>Walk</option>
                        <option>Hike</option>
                    </select>
                </div>

                <div className="px-4 py-4">
                    <label>Duration</label><br />
                    <input type="text" value={duration} placeholder="Duration" onChange={(e) => setDuration(e.target.value)} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="px-4 py-4">
                    <label>Description</label><br/>
                    <input type="text" name="description" value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} className="input input-bordered w-full max-w-xs" />    
                </div>
                
                <div className="px-4 py-4">
                <button className="btn btn-wide">Add</button>
                </div>
                
            </form>
        </div>
    )
}

export default ActivityForm

