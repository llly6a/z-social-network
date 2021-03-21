import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

let MenuLink = props => {
  return(
    <div className={s.Item}>
      <NavLink to={props.link} activeClassName={s.active}>{props.text}</NavLink>
    </div>
  )
}

const Navbar = () => {
  return (
    <nav className={s.Navbar}>
      <MenuLink link='/profile' text='Profile' />
      <MenuLink link='/dialogs' text='Dialogs' />
      <MenuLink link='/users' text='Users' />
    </nav>
  )
}

export default Navbar;