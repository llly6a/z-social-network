const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 0, message: 'first post', likes: 2 },
        { id: 1, message: 'second post', likes: 3 },
        { id: 2, message: 'third post', likes: 4 },
        { id: 3, message: 'four post', likes: 62 },
        { id: 4, message: 'fifth post', likes: 12 },
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
        let newPost = {
            id: state.posts.length,
            message: state.newPostText,
            likes: 0
        };
        return {
            ...state,
            newPostText : '',
            posts : [...state.posts, newPost]
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (newText) =>
({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default profileReducer;