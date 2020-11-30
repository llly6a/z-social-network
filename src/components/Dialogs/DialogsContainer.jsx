import { connect } from 'react-redux';
import { sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText}),
    WithAuthRedirect
)(Dialogs)