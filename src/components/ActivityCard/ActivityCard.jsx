import runningPic from './pictures/runningPic.png'

const ActivityCard = () => {

    const data = [
        { id: 1, activity: "Running" },
        { id: 2, activity: "Swimming" },
        { id: 3, activity: "Hiking" },
        { id: 4, activity: "Dancing" },
        { id: 5, activity: "Biking" },
        { id: 5, activity: "Biking" },
      ];

    return(
    <div className="flex overflow-auto pt-24">
        {data.map((user) => 
            <div className="card min-w-[14rem] bg-base-100 shadow-xl m-8" key={user.id}>
                <figure>
                    <img src={runningPic} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.activity}</h2>
                    <p>Date: 16/12/22</p>
                    <p>Duration: 02:00:00</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        )}
    </div>
    );
}

export default ActivityCard;