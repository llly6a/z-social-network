import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.Header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Deepin_logo.svg' alt='logo'></img>
        </header>
    )
}

export default Header;