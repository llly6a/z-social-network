import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <div className={s.Item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.Item}>
      <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;