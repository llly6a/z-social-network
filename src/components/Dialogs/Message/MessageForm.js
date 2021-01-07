import React from 'react';
import { Field, reduxForm } from "redux-form";



const MessageForm = (props) => {
    return (
        <div>
            <Field name="Message" component={"input"}/>
        </div>
    )
}

const ReduxMessageForm = reduxForm({
    form: 'message'
})(MessageForm);


export default ReduxMessageForm;