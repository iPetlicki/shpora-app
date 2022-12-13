import React from 'react';
import '../style/Header.css'
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? " active" : "");

const Header = () => {
    return (
            <nav className={`navStyle ${setActive}`}>
                <NavLink className='aStyle' to='/'>Home</NavLink>
                <a className='aStyle' href='https://ru.reactjs.org/' target='_blank'>Documentation</a>
                <a className='aStyle' href='https://github.com/facebook/react/' target='_blank'>GitHub</a>
            </nav>
    );
};

export default Header;
