import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} />)

    let onSendMessageClick = () => {
        props.dispatch(addMessageCreator());
    }

    let onNewMessageChange = (e) => {
        props.dispatch(updateNewMessageTextCreator(e.target.value));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div></div>
            <div className={s.textarea}>
                <textarea onChange={onNewMessageChange}
                value={props.state.newMessageText}
                placeholder="Print something..."/>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;