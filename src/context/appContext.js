import React, { useReducer, useContext, useState, useEffect } from "react";
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
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    LOGOUT_USER,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_ACTIVITY_BEGIN,
    CREATE_ACTIVITY_SUCCESS,
    CREATE_ACTIVITY_ERROR,
    GET_ACTIVITIES_BEGIN,
    GET_ACTIVITIES_SUCCESS,
    SET_EDIT_ACTIVITY,
    DELETE_ACTIVITY_BEGIN,
    DELETE_ACTIVITY_ERROR,
    EDIT_ACTIVITY_BEGIN,
    EDIT_ACTIVITY_SUCCESS,
    EDIT_ACTIVITY_ERROR,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
} from "./actions";

const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");

const initialState = {
    userLoading: true,
    isLoading: false,
    isStatsSuccess: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    showNavItem: false,
    user: null,
    userName: userName ? JSON.parse(userName) : null,
    token: token,
    isEditing: false,
    editActivityId: "",
    activityName: "",
    activityType: "",
    activityTypeOption: [
        "",
        "Walking",
        "Running",
        "Swimming",
        "Riding",
        "Hiking",
    ],
    startDate: Date.now(),
    endDate: Date.now(),
    duration: "",
    description: "",
    activities: [],
    totalActivities: 0,
    numOfPage: 1,
    page: 1,
    stats: {},
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
    const authFetch = axios.create({
        baseURL: "/api/v1",
        headers: {
            Authorization: `Bearer ${state.token}`,
        },
    });

    // request
    authFetch.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(error.response);
            if (error.response.status === 401) {
                console.log("AUTH ERROR");
            }
            return Promise.reject(error);
        }
    );

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
            const { data } = await axios.post(
                "/api/v1/auth/register",
                currentUser
            );
            const { user, token } = data;
            const { userName, name, email } = user;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { userName, name, email, token },
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
            const { userName, name, email } = user;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { userName, name, email, token },
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

    const updateUser = async (currentUser) => {
        dispatch({ type: UPDATE_USER_BEGIN });
        try {
            const { data } = await axios.patch(
                "/api/v1/auth/updateUser",
                currentUser,
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`,
                    },
                }
            );
            // console.log(data);
            const { user, token } = data;
            const { userName, name, email } = user;
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: { userName, name, email, token },
            });
            addUserToLocalStorage({ userName, token });
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type: UPDATE_USER_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    // 101 - Add logout
    const logoutUser = async () => {
        // await authFetch.get("/auth/logout");
        dispatch({ type: LOGOUT_USER });
        removeUserFromLocalStorage();
    };

    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
    };

    const clearValues = () => {
        dispatch({ type: CLEAR_VALUES });
    };

    const createActivity = async () => {
        dispatch({ type: CREATE_ACTIVITY_BEGIN });
        try {
            const {
                activityName,
                activityType,
                startDate,
                endDate,
                duration,
                description,
            } = state;

            await authFetch.post("/activities", {
                activityName,
                activityType,
                startDate,
                endDate,
                duration,
                description,
            });

            dispatch({ type: CREATE_ACTIVITY_SUCCESS });
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: CREATE_ACTIVITY_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    const getActivities = async () => {
        let url = "/activities";
        dispatch({ type: GET_ACTIVITIES_BEGIN });
        try {
            const { data } = await authFetch(url);
            const { activities, totalActivities, numOfPage } = data;
            dispatch({
                type: GET_ACTIVITIES_SUCCESS,
                payload: { activities, totalActivities, numOfPage },
            });
        } catch (error) {
            console.log(error.response);
        }
        clearAlert();
    };

    useEffect(() => {
        getActivities();
    }, []);

    const setEditActivity = (id) => {
        dispatch({ type: SET_EDIT_ACTIVITY, payload: { id } });
    };

    const editActivity = async () => {
        dispatch({ type: EDIT_ACTIVITY_BEGIN });
        // console.log('edit activity');

        try {
            const {
                activityName,
                activityType,
                startDate,
                endDate,
                duration,
                description,
            } = state;

            await authFetch.patch(`/activities/${state.editActivityId}`, {
                activityName,
                activityType,
                startDate,
                endDate,
                duration,
                description,
            });

            dispatch({ type: EDIT_ACTIVITY_SUCCESS });
            dispatch({ type: CLEAR_VALUES });
        } catch (error) {
            if (error.response.status === 401) return;
            dispatch({
                type: EDIT_ACTIVITY_ERROR,
                payload: { msg: error.response.data.msg },
            });
        }
        clearAlert();
    };

    const deleteActivity = async (activityId) => {
        dispatch({ type: DELETE_ACTIVITY_BEGIN });
        try {
            await authFetch.delete(`/activities/${activityId}`);
            getActivities();
        } catch (error) {
            logoutUser();
        }
        // console.log(`delete: ${activityId}`);
    };

    const showStats = async () => {
        dispatch({ type: SHOW_STATS_BEGIN });
        try {
            const { data } = await authFetch("/activities/stats");
            const { defaultStats } = data;
            dispatch({
                type: SHOW_STATS_SUCCESS,
                payload: {
                    stats: defaultStats.totalActivities,
                },
            });
        } catch (error) {
            console.log(error.response);
            logoutUser();
        }
        clearAlert();
    };

    useEffect(() => {
        let tid = setTimeout(() => {
            showStats();
        }, 100);
        return () => {
            clearTimeout(tid);
        };
    }, []);

    return (
        <AppContext.Provider
            value={{
                ...state,
                displayAlert,
                registerUser,
                loginUser,
                updateUser,
                logoutUser,
                handleChange,
                clearValues,
                createActivity,
                getActivities,
                setEditActivity,
                editActivity,
                deleteActivity,
                showStats,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
