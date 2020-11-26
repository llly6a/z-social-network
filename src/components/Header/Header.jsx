import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import s from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as UserIcon } from '../../assets/images/user.svg';
const Header = (props) => {
    return (
        <header className={s.Header}>
            <Logo className={s.logo}/>
            {props.isFetching
            ? <Preloader />
            : <div className={s.login}>
                    {props.isAuth
                    ? <p>{props.login}</p>
                    : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            }
        </header>
    )
}

export default Header;