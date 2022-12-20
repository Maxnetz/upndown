import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { register } from "../functions/auth.js";
import { useAppContext } from "../../context/appContext.js";
import { useEffect } from "react";

import Alert from "../Alert/Alert.jsx";

const Register = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        rePassword: "",
        dateOfBirth: "",
        gender: "",
        isMember: false,
    });

    const navigate = useNavigate();
    // global state
    const { userName, isLoading, showAlert, displayAlert, registerUser } =
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
        const {
            name,
            email,
            userName,
            password,
            rePassword,
            dateOfBirth,
            gender,
            isMember,
        } = value;

        // Validate the form values
        if (
            !name ||
            !email ||
            !password ||
            !rePassword ||
            !userName ||
            !dateOfBirth ||
            !gender
        ) {
            displayAlert();
            setError("All fields are required");
            return;
        }

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        if (password !== value.rePassword) {
            setError("Password not match");
            return;
        }

        const currentUser = {
            userName,
            email,
            password,
            name,
            dateOfBirth,
            gender,
        };
        if (isMember) {
            console.log("already a member");
        } else {
            registerUser(currentUser);
        }

        // reset state
        setValue({
            name: "",
            email: "",
            userName: "",
            password: "",
            rePassword: "",
            dateOfBirth: "",
            gender: "",
        });
    };
    
    useEffect(() => {
        if (userName) {
          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        }
      }, [userName, navigate]);

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>
                    {showAlert && <Alert />}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Name
                        </label>
                        <div>
                            <input
                                type="text"
                                id="name"
                                value={value.name}
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Email
                        </label>
                        <div>
                            <input
                                type="text"
                                id="email"
                                value={value.email}
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Username
                        </label>
                        <div>
                            <input
                                type="text"
                                id="userName"
                                value={value.userName}
                                name="userName"
                                placeholder="userName"
                                onChange={handleChange}
                                className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
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
                                value={value.password}
                                name="password"
                                onChange={handleChange}
                                className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Confirm Password
                        </label>
                        <div>
                            <input
                                type="password"
                                id="rePassword"
                                value={value.rePassword}
                                name="rePassword"
                                onChange={handleChange}
                                className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={value.dateOfBirth}
                            name="dateOfBirth"
                            placeholder="Select date"
                            onChange={handleChange}
                            className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="gender"
                            className="block text-sm font-medium text-gray-700 text-start"
                        >
                            Gender:
                        </label>

                        <div className="mt-1">
                            <select
                                id="gender"
                                value={value.gender}
                                name="gender"
                                onChange={handleChange}
                                className="select select-bordered w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {error && <p className="py-4 text-red-600 ">{error}</p>}

                    <button
                        className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400"
                        disabled={isLoading}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
