const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state : {
        postsPage: {
            posts: [
                { id: 1, message: 'first post', likes: 2 },
                { id: 2, message: 'second post', likes: 3 },
                { id: 3, message: 'third post', likes: 4 },
                { id: 4, message: 'four post', likes: 62 },
                { id: 5, message: 'fifth post', likes: 12 },
            ],
            newPostText: 'enter txt here'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Misha' },
                { id: 2, name: 'Zhenya' },
                { id: 3, name: 'Svin' },
                { id: 4, name: 'Koshka' },
                { id: 5, name: 'Sobaka' }
            ]
        ,
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Meow' },
                { id: 3, message: 'Arrrrr azazaza' },
            ],
            newMessageText: 'enter text here'
        }
    },
    _callSubscriber() {
    },
    getState(){
        return this._state;
    },
     subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
        let newPost = {
            id: this._state.postsPage.posts.lastIndexOf().id,
            message: this._state.postsPage.newPostText,
            likes: 0
        }
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText ='';
        this._callSubscriber();
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber(this._state);  
        } else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: this._state.dialogsPage.dialogs.lastIndexOf().id,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText ='';
            this._callSubscriber();
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);  
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (value) =>
({type: UPDATE_NEW_POST_TEXT, newText: value})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (value) =>
({type: UPDATE_NEW_MESSAGE_TEXT, newText: value})
export default store;