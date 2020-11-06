import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-alt-512.png';

class Users extends React.Component {

    componentDidMount() {
         axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users&page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span key={p}
                        className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id} className={s.user}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt='avatar' />
                    <div className={s.follow}>
                        {u.followed ?
                            <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    {/*<div>{u.status}</div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>*/}
                </div>)}
            </div>
        )
    }
}

export default Users;