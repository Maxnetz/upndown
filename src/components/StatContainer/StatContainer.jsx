import StatItem from "../StatItem/StatItem";


const StatContainer = () => {
    return (
        <div className="bg-base-100 grid gap-y-[2px] min-w-[18rem] p-8 mx-10 my-14 border-[1px] shadow-xl rounded-xl grow ">
        <div>
        <StatItem />
        </div>
        </div>
        
    )
}

export default StatContainer;