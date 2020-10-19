import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState();

            let onSendMessageClick = () => {
                store.dispatch(addMessageCreator());
            }

            let onNewMessageChange = (text) => {
                store.dispatch(updateNewMessageTextCreator(text));
            }
            return <Dialogs sendMessage={onSendMessageClick}
                updateNewMessage={onNewMessageChange}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;