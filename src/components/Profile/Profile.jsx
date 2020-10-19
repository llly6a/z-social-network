import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
