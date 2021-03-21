import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import ReduxPostForm from './PostForm';


const Posts = React.memo(props => {
    let postsElements =[...props.posts].reverse()
        .map(post => <Post message={post.message} like={post.likes} key={post.id} />)

    let onAddPostClick = (value) => {
        props.addPost(value.post);
    }

    return (
        <div className={s.Posts}>
            <h3>My posts</h3>
            <ReduxPostForm onSubmit={onAddPostClick}/>
            <div className={s.Posts}>
                {postsElements}
            </div>
        </div>
    )
})

export default Posts;