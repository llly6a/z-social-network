import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserInfo from './UserInfo/UserInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile__container}>
            <UserInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <PostsContainer />
        </div>
    )
}

export default Profile;
