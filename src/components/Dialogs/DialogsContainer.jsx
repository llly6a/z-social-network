import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return <Dialogs onAddMessage={onSendMessageClick}
    onChangeNewMessage={onNewMessageChange}
    dialogs={state.dialogsPage.dialogs}
    messages={state.dialogsPage.messages}
    newMessageText={state.dialogsPage.newMessageText}/>
}

export default DialogsContainer;