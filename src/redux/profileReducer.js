const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: 'first post', likes: 2 },
        { id: 1, message: 'second post', likes: 3 },
        { id: 2, message: 'third post', likes: 4 },
        { id: 3, message: 'four post', likes: 62 },
        { id: 4, message: 'fifth post', likes: 12 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
        return {
            ...state,
            newPostText : '',
            posts : [...state.posts, {
                id: state.posts.length,
                message: state.newPostText,
                likes: 0
            }]
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (value) =>
({type: UPDATE_NEW_POST_TEXT, newText: value})

export default profileReducer;