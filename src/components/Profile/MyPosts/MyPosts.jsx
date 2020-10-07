import React, { useRef } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const textRef = useRef(null);

    let postsElements = props.state.posts
        .map(post => <Post message={post.message} like={post.likes} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(textRef.current.value));
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={textRef} onChange={onPostChange}
                value={props.state.newPostText}
                placeholder="Напишите что-нибудь..."/>
            </div>
            <div>
                <button onClick={addPost}>New Post</button>
            </div>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;