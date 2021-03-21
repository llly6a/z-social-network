import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import MessageForm from './Message/MessageForm';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messagesElements = props.messages
        .map(message => <Message message={message.message} key={message.id} />)

    let onSubmit =(value) =>{
        props.sendMessage(value.message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textarea}>
                    <MessageForm onSubmit={onSubmit}/>
                </div>
            </div>

        </div>
    )
}


export default Dialogs;