import logo from './pictures/logo.png';

const NavBar = () => {
    return (
    <div className="bg-white fixed z-10 w-screen h-24 flex justify-between border-b-2 shadow-sm">
        <div className="h-full ml-6 flex items-center">
            <a href="/#"><img src={logo} alt="logo" className="h-16" /></a>
        </div>
        <div className="h-full mr-6 flex justify-around items-center gap-6 font-bold text-purple-500 text-lg ">
            <a href="/#">Dashboard</a>
            <a href="/#">Create Activity</a>
            <a href="/#">Profile</a>
        </div>
    </div>
    )
}

export default NavBar;