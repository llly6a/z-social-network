import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messagesElements = props.messages
        .map(message => <Message message={message.message} key={message.id} />)

    let newMessagetext = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = () => {
        props.updateNewMessageText(newMessagetext.current.value);
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
                <textarea ref={newMessagetext} onChange={onNewMessageChange}
                value={props.newMessageText}
                placeholder="Print something..."/>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;