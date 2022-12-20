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
    const { userName, isLoading, showAlert, displayAlert, loginUser } = useAppContext();
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
        }
    }, [userName, navigate]);

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                    <div className="w-100">
                        <img
                            className="mx-auto h-12 w-auto"
                            src={logo}
                            alt="Workflow"
                        />
                    </div>

                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign In
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
                                    className="w-full border bg-white border-gray-300 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 py-4"
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
                                    className="w-full border bg-white border-gray-300 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 py-4"
                                />
                            </div>
                        </div>
                        {error && <p className="py-4 text-red-600 ">{error}</p>}
                        <div className="py-4">
                            <button className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
