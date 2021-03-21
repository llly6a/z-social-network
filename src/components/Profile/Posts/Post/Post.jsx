import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.post}>
            <aside className={s.photo}>
                <img src={require('../../../../assets/images/user.svg')} alt='user-photo'/>
            </aside>
            <article className={s.message}>
                <p>{props.message}</p>  
            </article>
            <div className={s.footer}>
                <img src={require('../../../../assets/images/like.svg')} alt='like'/>
                <p>{props.like}</p>
            </div>
        </div>
    )
}

export default Post;