import { AnyAction } from 'redux';
const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

let initialState:InitialStateType = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state = initialState, action: AnyAction):InitialStateType => {
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

type SendMessageType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export const sendMessage = (newMessageText: string):SendMessageType => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;