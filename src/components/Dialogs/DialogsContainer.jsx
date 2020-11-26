import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {sendMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;