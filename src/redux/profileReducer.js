import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 0, message: 'first post', likes: 2 },
        { id: 1, message: 'second post', likes: 3 },
        { id: 2, message: 'third post', likes: 4 },
        { id: 3, message: 'four post', likes: 62 },
        { id: 4, message: 'fifth post', likes: 12 },
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
        let newPost = {
            id: state.posts.length,
            message: action.newPostText,
            likes: 0
        };
        return {
            ...state,
            posts : [...state.posts, newPost]
        }
        case SET_USER_PROFILE: {
            return {...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export default profileReducer;