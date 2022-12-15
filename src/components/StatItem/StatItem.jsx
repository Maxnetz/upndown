import { MdPendingActions } from 'react-icons/md';

const StatItem = () => {

    return (
        <div className="bg-white flex flex-col justify-around">
            
            <header className="flex justify-between text-3xl font-bold">
                <span className='count p-4 ml-4'>1</span>
                <span className='icon p-4 mr-4'><MdPendingActions /></span>
            </header>
            <h5 className="title p-4 text-center text-xl font-bold">Workout Status</h5>
        </div>
    );
}

export default StatItem;