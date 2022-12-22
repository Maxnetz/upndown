import React from "react";
import Image from "./pictures/run.png";
import Login from "../Login/Login";
import Register from "../Register/Register";
const LandingPage = () => {
    return (
        <div className=" flex h-screen w-full bg-purple-200 text-black py-24 px-16 xs:px-8 ">
            <div className="bg-white w-full rounded-[32px] mx-auto flex flex-row items-center justify-center h-full px-4 lg:flex-col xs:w-full xs:rounded-[12px] xs:mx-1" >
                <div className="flex flex-col justify-center h-full px-12">
                    <h3 className="text-4xl font-bold xs:text-md">
                        UPNDOWN{" "}
                    </h3>
                    <p className="text-lg sm:text-xs py-4 mx-w-lg text-black text-left">
                    “Once you are exercising regularly, 
                    the hardest thing is to stop it.”
                                                           
                    </p>

                    <div className="flex flex-row xs:flex-col">
                        <a
                            href="login"
                            className="w-full text-center focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 mr-4">
                            SIGN IN{" "}
                        </a>
                        <div className="modal" id="my-modal-2">
                            <div className="modal-box bg-white ">
                                <Login />
                                <div className="modal-action">
                                    <a
                                        href="/"
                                        className="w-full text-center focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 text-black dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 ">
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a
                            href="register"
                            className="w-full text-center focus:outline-none text-white bg-yellow-300 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-800 dark:focus:ring-yellow-400">
                            SIGN UP{" "}
                        </a>
                        <div className="modal" id="my-modal-3">
                            <div className="modal-box bg-white">
                                <Register />
                                <div className="modal-action">
                                    <a
                                        href="/"
                                        className="focus:outline-none text-white bg-purple-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-800 dark:focus:ring-indigo-400 ">
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={Image}
                    alt="LandingImage"
                    className="max-w-auto 2xl:w-5/12  lg:hidden md:hidden sm:hidden xs:hidden"
                />
            </div>
        </div>
    );
};

export default LandingPage;
