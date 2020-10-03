import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.Item}>
            <img src='http://www.nokiaplanet.com/uploads/posts/2014-02/1393515654_full-moon-480x800.jpg' alt='ava'></img>
           {props.message}
            <div>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;