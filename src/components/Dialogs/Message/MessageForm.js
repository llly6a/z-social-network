import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';

const maxLength50 =  maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="message" component={Textarea}
                validate={[required, maxLength50]} placeholder="enter message..."/>
                <button> Send </button>
            </div>
        </form>
    )
}

const ReduxMessageForm = reduxForm({
    form: 'message'
})(MessageForm);


export default ReduxMessageForm;