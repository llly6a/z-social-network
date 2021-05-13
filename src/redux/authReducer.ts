import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { AnyAction } from 'redux';
import { AppThunk } from './redux-store';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';

type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    password: string | null,
    rememberMe: boolean,
    userPhoto: string | null,
    isFetching: boolean,
    isAuth: boolean
}

const initialState: InitialStateType = {
    userId: null,
    email:null,
    login: null,
    password: null,
    rememberMe: false,
    userPhoto: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action: AnyAction) => {
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

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean):SetAuthUserDataActionType =>
 ({ type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

type SetUserPhotoType = {
    type: typeof SET_USER_PHOTO,
    userPhoto: string
}

export const setUserPhoto = (userPhoto: string): SetUserPhotoType => ({ type: SET_USER_PHOTO, userPhoto});

type SetFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export const setFetching = (isFetching: boolean): SetFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getAuthUserData = ():AppThunk => async (dispatch) => {
    dispatch(setFetching(true));
    let response = await authAPI.authMe();

    if(response.data.resultCode === 0){
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id ,email, login, true));
        dispatch(setFetching(false));
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);
    
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Unknown Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null ,null, null, false));
    }
}

export default authReducer;