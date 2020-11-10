import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-alt-512.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
    <div>
        {pages.map(p => {
            return <span key={p}
            className={props.currentPage === p ? s.selectedPage : ''}
            onClick={() => {props.onPageChanged(p)}}>{p}</span>
        })}
    </div>
    {props.users.map(u => <div key={u.id} className={s.user}>
        <div>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='avatar' />
            </NavLink>
        </div>
        <div className={s.follow}>
            {u.followed ?
                <button onClick={() => props.unfollow(u.id)}>UnFollow</button> :
                <button onClick={() => props.follow(u.id)}>Follow</button>}
        </div>
        <div>{u.name}</div>
        {/*<div>{u.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>*/}
    </div>)}
</div>

}

export default Users;