import { usersAPI } from "../api/api";
import { AnyAction } from 'redux';
import { AppThunk } from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


interface Users {
    id: number,
    name: string,
    status: string,
    uniqueUrlName: string,
    photos: 
        {
            small: string,
            large: string
        }
}

interface UsersState {
    users: Users[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: { isFetching: boolean, id: number }[]
}

let initialState: UsersState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_TOTAL_USERS:
            return { ...state, totalUsersCount: action.totalCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return { ...state,
                followingInProgress : action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
                }
        default:
            return state;
    }
}

//action creators

export const followSucsess = (userId: number) => ({ type: FOLLOW, userId });
export const unfollowSucsess = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsers = (users: Users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS, totalCount});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

//thunks

export const requestUsers = (page: number, pageSize: number): AppThunk  => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(setCurrentPage(page));
        dispatch(toggleIsFetching(false));
}

export const follow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSucsess(userId));
            dispatch(toggleFollowingProgress(false, userId));
        }
}

export const unfollow = (userId: number): AppThunk => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSucsess(userId));
            dispatch(toggleFollowingProgress(false, userId));
        }
}

export default usersReducer;