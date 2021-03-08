import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile__container}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
