import React, { useReducer, useContext, useState } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
} from "./actions";

const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");

const initialState = {
    userLoading: true,
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    userName: userName ? JSON.parse(userName) : null,
    // userName: JSON.parse(userName),
    token: token,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };
    const addUserToLocalStorage = ({ userName, token }) => {
        localStorage.setItem("userName", JSON.stringify(userName));
        localStorage.setItem("token", token);
        // console.log(userName)
    };

    // RemoveUser - localstorage
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
    };

    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const response = await axios.post(
                "/api/v1/auth/register",
                currentUser
            );
            const { userName, token } = response.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { userName, token },
            });
            // Local Storage
            addUserToLocalStorage({ userName, token });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN });
        try {
            const { data } = await axios.post(
                "/api/v1/auth/login",
                currentUser
            );
            const { user, token } = data;
            const { userName } = user;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { userName, token },
            });
            // Local Storage
            addUserToLocalStorage({ userName, token });
        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    // 101 - Add logout
    const logoutUser = () => {
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    return (
        <AppContext.Provider
            value={{ ...state, displayAlert, registerUser, loginUser, logoutUser }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
