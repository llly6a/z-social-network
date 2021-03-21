const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: []
,
    messages: []
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