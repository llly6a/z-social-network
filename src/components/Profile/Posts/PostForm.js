import React from 'react';
import s from './Posts.module.css';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators.js";
import { Textarea } from '../../common/FormsControls/FormControls.js';

const maxLength10 =  maxLengthCreator(1000);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.postForm} name="post" component={Textarea} placeholder="enter post text..."
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