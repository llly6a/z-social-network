import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const SET_LOGIN_FORM = 'SET_LOGIN_FORM';

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
                ...action.data,
                isAuth: true
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
        case SET_LOGIN_FORM:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId, email, login} });
export const setUserPhoto = (userPhoto) => ({ type: SET_USER_PHOTO, userPhoto});
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setLoginForm = (email, password, rememberMe) => ({type: SET_LOGIN_FORM, data:{email, password, rememberMe} });
export const getAuthUserData = () => (dispatch) => {
    dispatch(setFetching(true));
    authAPI.authMe()
    .then(response => {
            if(response.data.resultCode === 0){
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id ,email, login));
                dispatch(setFetching(false));
            }
    });
}

export const getLoginStatus = (loginFormData) => (dispatch) => {
    dispatch(setLoginForm(loginFormData));
    let {email, password, rememberMe} = loginFormData;
    authAPI.login({email, password, rememberMe}).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserData());
        }
    })
}

export default authReducer;