import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData, setUserPhoto, setFetching } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        //axios.get(`http://localhost:3001/api/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id ,email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
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