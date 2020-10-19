import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let onAddPostClick = () => {
        props.store.dispatch(addPostCreator());
    }

    let onNewPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return <MyPosts updateNewPostText={onNewPostChange} 
    addPost={onAddPostClick}
    posts={state.profileReducer.posts}
    newPostText={state.profileReducer.newPostText}/>
}

export default MyPostsContainer;