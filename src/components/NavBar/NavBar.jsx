import logo from "./pictures/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
//Page
import { useAppContext } from "../../context/appContext";

const NavBar = () => {
    const { token, logoutUser } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        setTimeout(() => {
            return window.location.assign("/");
        }, 3000);
    };

    return (
        <div>
            <div className="bg-white/0 fixed z-10 h-24 flex justify-between w-screen">
                <div className="h-full ml-6 flex items-center">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-16" />
                    </a>
                </div>
                <div className="h-full mr-6 flex justify-around items-center gap-8 text-purple-500 font-bold text-lg">
                    <nav>
                        {/*<Link to="/" className="uppercase  mr-4">
                            Home
    </Link> */}

                        <div className="sm:hidden xs:hidden">
                            {token && (
                                <Link
                                    to="/dashboard"
                                    className="uppercase  mr-4 "
                                >
                                    Dashboard
                                </Link>
                            )}

                            {token && (
                                <Link to="/profile" className="uppercase  mr-4">
                                    Profile
                                </Link>
                            )}

                            {token && (
                                <button onClick={handleLogout}>SIGN OUT</button>
                            )}
                        </div>
                        <div>
                            <button className="relative group hidden sm:flex xs:flex">
                                <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300  duration-200 ">
                                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                        <div className="bg-purple-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                                        <div className="bg-purple-500 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                                        <div className="bg-purple-500 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                                        <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                                            <div className="absolute bg-purple-500 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                                            <div className="absolute bg-purple-500 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
