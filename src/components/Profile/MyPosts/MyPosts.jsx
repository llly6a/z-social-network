import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const textRef=useRef(null);

    let postsElements = props.state.posts
    .map(post => <Post message={post.message} like={post.likes} />)

    let addPost = () => {
        props.dispatch(
            {
                type: 'ADD-POST'
            });
    }

    let onPostChange = () => {
        let text = textRef.current.value;
        props.dispatch(
            {
                type: 'UPDATE-NEW-POST-TEXT',
                newText: text
            });
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={textRef} onChange={onPostChange} value={props.state.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>New Post</button>
            </div>
            <div className = {s.Posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;