import React from "react";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setRePassword(e.target.value);
    };
    const handleDateOfBirthChange = (e) => {
        setDateOfBirth(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form values
        if (
            !name ||
            !email ||
            !password ||
            !username ||
            !dateOfBirth ||
            !gender
        ) {
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

        // reset state
        setName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setRePassword("");
        setDateOfBirth("");
        setGender("");
        setError(null);
    };

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-start py-4">
                            Name
                        </label>
                        <div>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={name}
                                onChange={handleNameChange}
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
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
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
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
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
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
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
                                name="repassword"
                                id="repassword"
                                value={rePassword}
                                onChange={handleConfirmPassword}
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
                            placeholder="Select date"
                            value={dateOfBirth}
                            onChange={handleDateOfBirthChange}
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
                                name="gender"
                                value={gender}
                                onChange={handleGenderChange}
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

                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
