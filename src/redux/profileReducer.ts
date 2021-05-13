import { AppThunk } from './redux-store';
import { AnyAction } from 'redux';
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type PostType = {
    id: number
    message: string
    likes: number
}

type PhotosType = {
    large: string | null
    small: string | null
}

type ContactsType = {
    github: string
    vk: string
    instagram: string
    facebook: string
    twitter: string
    youtube: string
    mainLink: string
}

type ProfileType = {
    userId: number
    fullName: string | null
    aboutMe: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos: PhotosType
    contacts: ContactsType
}

type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}

const initialState:InitialStateType = {
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

const profileReducer = (state = initialState, action:AnyAction):InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS: {
            return {...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
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

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText});
export const deletePost = (postId: number) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string) => ({type: SET_STATUS, status});
type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType):SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number):AppThunk => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number):AppThunk => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string):AppThunk => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File):AppThunk => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export default profileReducer;