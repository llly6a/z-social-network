import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators.js";
import { Textarea } from '../../common/FormsControls/FormControls.js';

const maxLength10 =  maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="post" component={Textarea} placeholder="enter post text..."
                 validate={[required,maxLength10]}/>
                <button> Send </button>
            </div>
        </form>
    )
}

const ReduxPostForm = reduxForm({
    form: 'post'
})(PostForm);


export default ReduxPostForm;