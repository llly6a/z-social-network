import React from 'react';
import s from './Users.module.css';
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {props.users.map(u => <div key={u.id} className={s.user}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    {u.photos.large != null
                    ? <img src={u.photos.large} className={s.userPhoto} alt='ava'/>
                    : <UserIcon className={s.userIcon}/>}
                </NavLink>
            </div>
            <div>{u.name}</div>
            <div className={s.follow}>
                {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => props.unfollow(u.id)}>UnFollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => props.follow(u.id)}>Follow</button>
                }
            </div>
            {/*<div>{u.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>*/}
        </div>)}
        <div>
            {pages.map(p => {
                return <span key={p}
                    className={props.currentPage === p ? `${s.selectedPage} ${s.pageNumber}` : `${s.pageNumber}`}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    </div>

}

export default Users;