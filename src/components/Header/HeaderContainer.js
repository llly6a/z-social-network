import React from 'react';
import { connect } from 'react-redux';
import { authAPI, profileAPI } from '../../api/api';
import { setAuthUserData, setUserPhoto, setFetching } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.setFetching(true);

        authAPI.authMe()
        .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id ,email, login);
                    
                    profileAPI.getProfile(id)
                    .then(response => {
                        this.props.setUserPhoto(response.data.photos.large);
                    });
                    this.props.setFetching(false);
                }
        });
    }
    
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    myId: state.auth.userPhoto
});

export default connect(mapStateToProps, {setAuthUserData, setUserPhoto, setFetching} )(HeaderContainer);