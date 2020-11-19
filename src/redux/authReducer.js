const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    userId: null,
    email:null,
    login: null,
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
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId, email, login} });
export const setUserPhoto = (userPhoto) => ({ type: SET_USER_PHOTO, userPhoto});
export const setFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });



export default authReducer;