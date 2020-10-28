const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_MESSAGE:{
            let stateCopy = {...state, messages : [...state.messages]};
            stateCopy.messages.push({
                id: state.messages.length,
                message: state.newMessageText
            });
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (value) =>
({type: UPDATE_NEW_MESSAGE_TEXT, newText: value})

export default dialogsReducer;