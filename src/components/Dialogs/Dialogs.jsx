import React, { useRef } from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    const textRef = useRef(null);

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} />)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        props.dispatch(updateNewMessageTextActionCreator(textRef.current.value));
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
                <textarea ref={textRef} onChange={onMessageChange}
                value={props.state.newMessageText}
                placeholder="Напишите что-нибудь..."/>
                <button onClick={addMessage}>отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;