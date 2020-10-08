import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state : {
        postsPage: {
            posts: [
                { id: 0, message: 'first post', likes: 2 },
                { id: 1, message: 'second post', likes: 3 },
                { id: 2, message: 'third post', likes: 4 },
                { id: 3, message: 'four post', likes: 62 },
                { id: 4, message: 'fifth post', likes: 12 },
            ],
            newPostText: ''
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
                { id: 0, message: 'Hi' },
                { id: 1, message: 'Meow' },
                { id: 2, message: 'Arrrrr azazaza' },
            ],
            newMessageText: ''
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
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);  
    }
}

export default store;