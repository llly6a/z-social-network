import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { authAPI, profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            authAPI.authMe().then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    profileAPI.getProfile(id)
                    .then(response => {
                        this.props.setUserProfile(response.data)
                    });
                }
            });
        } else {
            profileAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
        }
    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let profileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(profileContainerWithUrlData);
