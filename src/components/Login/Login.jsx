import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext.js";

// assets
import logo from "./pictures/logo.png";
import Alert from "../Alert/Alert.jsx";

import { useNavigate } from "react-router-dom";

const Login = () => {
    // States
    const [value, setValue] = useState({
        userName: "",
        password: "",
    });
    const navigate = useNavigate();
    const { userName, isLoading, showAlert, displayAlert, loginUser } =
        useAppContext();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { userName, password } = value;
        const currentUser = { userName, password };

        if (userName.trim() === "" || password.trim() === "") {
            displayAlert();
            setError("Username and password are required");
            return;
        } else {
            loginUser(currentUser);
            // console.log(currentUser);
        }

        // reset state
        setValue({
            userName: "",
            password: "",
        });
    };

    useEffect(() => {
        if (userName) {
            setTimeout(() => {
                navigate("/dashboard");
            }, 3000);
            return window.location.assign("/dashboard");
        }
    }, [userName, navigate]);

    return (
        <div className=" pt-32 bg-purple-200 h-screen">
            <div className=" flex justify-center ">
                <div className="bg-white rounded-[20px] w-3/12 px-8  md:w-7/12 md:px-8 sm:w-4/6 xs:px-4 xs:w-5/6">
                    <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                        <div className="w-100">
                            <img
                                className="mx-auto h-12 w-auto"
                                src={logo}
                                alt="logo"
                            />
                        </div>

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            SIGN IN
                        </h2>
                        {showAlert && <Alert />}
                        <div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start py-4">
                                    Username
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        id="userName"
                                        name="userName"
                                        placeholder="Username"
                                        value={value.userName}
                                        onChange={handleChange}
                                        className="w-full border bg-white border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-start py-4">
                                    Password
                                </label>
                                <div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={value.password}
                                        onChange={handleChange}
                                        className="w-full border bg-white border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"/>
                                </div>
                            </div>
                            {error && (
                                <p className="py-4 text-red-600 ">{error}</p>
                            )}
                            <div className="py-4 flex justify-center">
                                <button className="w-full focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
