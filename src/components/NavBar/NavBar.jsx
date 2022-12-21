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
            window.location.assign("/");
        }, 500);
    };


    return (
        <div>
            <div className="bg-white/0 fixed z-10 h-24 flex justify-between w-screen">
                <div className="h-full ml-6 flex items-center">
                    <a href="/">
                        <img src={logo} alt="logo" className="h-16" />
                    </a>
                </div>
                <div className="h-full mr-6 flex justify-around items-center gap-8 text-purple-500 font-bold text-lg ">
                    <nav>
                        {/*<Link to="/" className="uppercase  mr-4">
                            Home
    </Link> */}

                        {token && (
                            <Link to="/dashboard" className="uppercase  mr-4">
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
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
