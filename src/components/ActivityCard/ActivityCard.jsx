import { useState } from 'react';
import runningPic from './pictures/runningPic.png'

const ActivityCard = () => {
    const [data,setData] = useState([
        { id: 1,
          activity: "Running",
          date: "16/12/22",
          duration: "02:00:00",
        },
        { id: 2, 
          activity: "Swimming",
          date: "16/12/22",
          duration: "02:00:00",
        },
        { id: 3,
          activity: "Hiking",
          date: "16/12/22",
          duration: "02:00:00",
        },
        { id: 4,
          activity: "Dancing",
          date: "16/12/22",
          duration: "02:00:00",
        },
        { id: 5,
          activity: "Biking",
          date: "16/12/22",
          duration: "02:00:00",
        },
        { id: 5,
          activity: "Biking",
          date: "16/12/22",
          duration: "02:00:00",
        },
      ]);

    return(
     
    <div className="flex overflow-auto pt-24 bg-white">
        {data.map((user) => 
            <div className="card min-w-[14rem] bg-base-100 shadow-xl m-8" key={user.id}>
                <figure>
                    <img src={runningPic} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.activity}</h2>
                    <p>Date: {user.date}</p>
                    <p>Duration: {user.duration}</p>
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