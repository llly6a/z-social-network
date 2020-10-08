import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.state.posts
        .map(post => <Post message={post.message} like={post.likes} />)

    let onAddPostClick = () => {
        props.dispatch(addPostCreator());
    }

    let onNewPostChange = (e) => {
        props.dispatch(updateNewPostTextCreator(e.target.value));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onNewPostChange}
                value={props.state.newPostText}
                placeholder="Print something..."/>
            </div>
            <div>
                <button onClick={onAddPostClick}>Add Post</button>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;