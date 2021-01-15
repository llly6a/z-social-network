const SEND_MESSAGE = 'SEND_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: state.messages.length,
                message: action.newMessageText
            };
            return {
                ...state,
                messages : [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;