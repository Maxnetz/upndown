import logo from "./pictures/logo.png";
import { Link } from "react-router-dom";
//Page

const NavBar = () => {
    return (
        <div>
            <div className="bg-white h-24 flex justify-between border-b-2 shadow-sm">
                <div className="h-full ml-6 flex items-center">
                    <a href="/"><img src={logo} alt="logo" className="h-16" /></a>
                </div>
                <div className="h-full mr-6 flex justify-around items-center gap-8 text-purple-500 font-bold text-lg ">
                    <nav>
                        <Link to="/" className='uppercase  mr-2'>Home</Link>
                        <Link to="/dashboard" className='uppercase  mr-2'>Dashboard</Link>
                        <Link to="/profile" className='uppercase  mr-2'>Profile</Link>
                    </nav>
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;
