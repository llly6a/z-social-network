import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

let initialState = {
    userId: null,
    email:null,
    login: null,
    password: null,
    rememberMe: false,
    userPhoto: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_USER_PHOTO:
            return {
                ...state,
                currentUserId: action.currentUserId
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload:
    {userId, email, login, isAuth} });
export const setUserPhoto = (userPhoto) => ({ type: SET_USER_PHOTO, userPhoto});
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const getAuthUserData = () => async (dispatch) => {
    dispatch(setFetching(true));
    let response = await authAPI.authMe();

    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id ,email, login, true));
        dispatch(setFetching(false));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);
    
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Unknown Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null ,null, null, false));
    }
}

export default authReducer;