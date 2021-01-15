import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profileReducer';
import {getLoginStatus} from '../../redux/authReducer';
import { withRouter } from 'react-router-dom';
import { Input } from '../common/FormsControls/FormControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} component={Input} name={"email"}
                 validate={required}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"}
                validate={required}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.getLoginStatus(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, getLoginStatus}),
    withRouter
)(Login);