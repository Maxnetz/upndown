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
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_ACTIVITY_BEGIN,
    CREATE_ACTIVITY_SUCCESS,
    CREATE_ACTIVITY_ERROR,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
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

import { initialState } from "./appContext";
const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: "danger",
            alertText: "Please provide all values",
        };
    }

    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertType: "",
            alertText: "",
        };
    }

    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            userName: action.payload.userName,
            showAlert: true,
            alertType: "success",
            alertText: "User Created! Redirecting...",
            showNavItem: false,
        };
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            userName: action.payload.userName,
            showAlert: true,
            alertType: "success",
            alertText: "LOGIN SUCCESSFUL! Redirecting...",
        };
    }

    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    // 101 LOGOUT  IMPORT LOGOUT_USER , initialState from appContext.js
    // then add logoutUser -> onClick & add logoutUser {__} = useAppContext
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            token: null,
        };
    }

    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value,
        };
    }

    if (action.type === CREATE_ACTIVITY_BEGIN) {
        return {
            ...state,
            isLoading: true,
        };
    }

    if (action.type === CREATE_ACTIVITY_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "New Activity Created",
        };
    }

    if (action.type === CREATE_ACTIVITY_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return { ...state, isLoading: true };
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            userName: action.payload.userName,
            showAlert: true,
            alertType: "success",
            alertText: "User Profile Updated!",
        };
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    if (action.type === CLEAR_VALUES) {
        const initialState = {
            isEditing: false,
            editActivityId: "",
            activityName: "",
            activityType: "",
            startDate: Date.now(),
            endDate: Date.now(),
            duration: "",
            description: "",
        };

        return {
            ...state,
            ...initialState,
        };
    }

    if (action.type === GET_ACTIVITIES_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        };
    }

    if (action.type === GET_ACTIVITIES_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            activities: action.payload.activities,
            totalActivities: action.payload.totalActivities,
            numOfPage: action.payload.numOfPage,
        };
    }

    if (action.type === SET_EDIT_ACTIVITY) {
        const activity = state.activities.find(
            (activity) => activity._id === action.payload.id
        );

        const {
            _id,
            activityName,
            activityType,
            startDate,
            endDate,
            description,
        } = activity;

        return {
            ...state,
            isEditing: true,
            editActivityId: _id,
            activityName,
            activityType,
            startDate,
            endDate,
            description,
        };
    }
    
    if (action.type === DELETE_ACTIVITY_BEGIN) {
        return { ...state, isLoading: true };
    }

    if (action.type === DELETE_ACTIVITY_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    if (action.type === EDIT_ACTIVITY_BEGIN) {
        return {
            ...state,
            isLoading: false,
        };
    }
    if (action.type === EDIT_ACTIVITY_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "success",
            alertText: "Activity Updated",
        };
    }

    if (action.type === EDIT_ACTIVITY_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: "danger",
            alertText: action.payload.msg,
        };
    }

    if (action.type === SHOW_STATS_BEGIN) {
        return {
            ...state,
            isLoading: true,
            showAlert: false,
        }
    }

    if (action.type === SHOW_STATS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isStatsSuccess: true,
            stats: action.payload.stats,
        }
    }



    throw new Error(`no such action : ${action.type}`);
};

export default reducer;
