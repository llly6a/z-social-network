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
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Meow' },
                { id: 3, message: 'Arrrrr' },
            ]
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
        if(action.type === 'ADD-POST'){
        let newPost = {
            id: this._state.postsPage.posts.lastIndexOf().id,
            message: this._state.postsPage.newPostText,
            likes: 0
        }
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText ='';
        this._callSubscriber();
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber(this._state);  
        } 
    }


}

export default store;