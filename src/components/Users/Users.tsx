import React, { useEffect } from 'react';
import s from './Users.module.css';
import userIcon from '../../assets/images/user.svg';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { follow, requestUsers, unfollow, UsersType } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

type PropsType = {
    users: UsersType
}

let Users = () => {

    // redux store selector
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = useSelector((state:PropsType) => state.users, shallowEqual)

    // dispatch functions

    const dispatch = useDispatch();

    // first loading
    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize))
    },[dispatch, currentPage, pageSize]);

    const onPageChanged = (newPage: number) => {
        dispatch(requestUsers(newPage, pageSize))
    }

    const onFollow = (id: number) => {
        dispatch(follow(id));
    }

    const onUnFollow = (id: number) => {
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
                    alt='avatar'/>
                </NavLink>
            </div>
            <p>{u.name}</p>
            <div className={s.follow}>
                {u.followed
                ? <button disabled={followingInProgress.some(({id}) => id === u.id)}
                onClick={() => onUnFollow(u.id)}>UnFollow</button>
                : <button disabled={followingInProgress.some(({id}) => id === u.id)}
                onClick={() => onFollow(u.id)}>Follow</button>
                }
            </div>
        </div>)}

    </div>

}

export default Users;