import React, { useEffect } from 'react';
import s from './Users.module.css';
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { follow, requestUsers, unfollow } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

let Users = () => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = useSelector(state => ({
        users : state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
        })
    , shallowEqual)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    },[dispatch]);

    const onPageChanged = (newPage) => {
        dispatch(requestUsers(newPage, pageSize))
    }

    const onFollow = (id) => {
        dispatch(follow(id));
    }

    const onUnFollow = (id) => {
        dispatch(unfollow(id));
    }

    return <div>  
        {isFetching ? <Preloader /> : null}

        <Paginator 
        onPageChanged = {onPageChanged}
        currentPage = {currentPage}
        entitiesCount = {totalUsersCount}
        pageSize = {pageSize}
        buttonsCount = {10} />

        {users.map(u => <div key={u.id} className={s.user}>
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