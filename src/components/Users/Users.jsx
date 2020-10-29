import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    if(props.users.length === 0){
    props.setUsers([
        { id: 0, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: false, fullName: 'Mikhail', location: { country: 'Russia', city: 'Moscow' }, status: 'iam leraning React' },
        { id: 1, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: true, fullName: 'Evgenia', location: { country: 'Russia', city: 'Moscow' }, status: '222' },
        { id: 2, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: false, fullName: 'Neriida', location: { country: 'Russia', city: 'Moscow' }, status: '33' },
        { id: 3, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: true, fullName: 'Mr. Gru', location: { country: 'Russia', city: 'Moscow' }, status: '4444' },
        { id: 4, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: false, fullName: 'Kolos', location: { country: 'Russia', city: 'Moscow' }, status: '55555' },
        { id: 5, photoUrl: 'https://v1.popcornnews.ru/avatars/QD4rjq.jpg', followed: true, fullName: 'Kostusha', location: { country: 'Russia', city: 'Moscow' }, status: '66666' }
    ]);
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto} alt='avatar'/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;