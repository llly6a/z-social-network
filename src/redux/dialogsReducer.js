const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
        case SEND_MESSAGE:{
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: '',
                messages : [...state.messages, newMessage]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageText = (newText) =>
({type: UPDATE_NEW_MESSAGE_TEXT, newText})

export default dialogsReducer;