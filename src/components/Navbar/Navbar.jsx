import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <div className={s.Item}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;