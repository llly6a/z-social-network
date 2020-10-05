import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo />
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
