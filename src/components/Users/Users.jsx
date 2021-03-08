import React, { useEffect } from 'react';
import s from './Users.module.css';
import userIcon from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { follow, requestUsers, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

let Users = () => {

    // redux store selector
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = useSelector(state => state.users, shallowEqual)

    // dispatch functions

    const dispatch = useDispatch();

    // first loading
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    },[]);

    const onPageChanged = (newPage) => {
        dispatch(requestUsers(newPage, pageSize))
    }

    const onFollow = (id) => {
        dispatch(follow(id));
    }

    const onUnFollow = (id) => {
        dispatch(unfollow(id));
    }

    // jsx

    return <div> 
        {/* Preloader */}
        {isFetching ? <Preloader /> : null}
        {/* Paginator */}
        <Paginator 
        onPageChanged = {onPageChanged}
        currentPage = {currentPage}
        entitiesCount = {totalUsersCount}
        pageSize = {pageSize}
        buttonsCount = {10} />
        {/* Users List */}
        {users.map(u => <div key={u.id} className={s.user}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.large || userIcon} className={s.userPhoto}
                    alt='user photo'/>
                </NavLink>
            </div>
            <p>{u.name}</p>
            <div className={s.follow}>
                {u.followed
                ? <button disabled={followingInProgress.some(id => id === u.id)}
                onClick={() => onUnFollow(u.id)}>UnFollow</button>
                : <button disabled={followingInProgress.some(id => id === u.id)}
                onClick={() => onFollow(u.id)}>Follow</button>
                }
            </div>
        </div>)}

    </div>

}

export default Users;