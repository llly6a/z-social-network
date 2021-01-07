import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let postsElements = props.posts
        .map(post => <Post message={post.message} like={post.likes} key={post.id} />)

    let onAddPostClick = () => {
        props.addPost();
    }

    let onNewPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    }

    return (
        <div className={s.Posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onNewPostChange}
                value={props.newPostText}
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