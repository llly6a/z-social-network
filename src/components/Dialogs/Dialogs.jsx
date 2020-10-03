import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> )

    let messagesElements = props.state.messages
    .map(message => <Message message={message.message}/> )  

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;