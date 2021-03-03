import React from 'react';
import s from './Users.module.css';
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

let Users = (props) => {

    return <div>  
        <Paginator 
        onPageChanged = {props.onPageChanged}
        currentPage = {props.currentPage}
        entitiesCount = {props.totalUsersCount}
        pageSize = {props.pageSize}
        buttonsCount = {10} />
        {props.users.map(u => <div key={u.id} className={s.user}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    {u.photos.large != null
                    ? <img src={u.photos.large} className={s.userPhoto} alt='ava'/>
                    : <UserIcon className={s.userIcon}/>}
                </NavLink>
            </div>
            <p>{u.name}</p>
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

    </div>

}

export default Users;