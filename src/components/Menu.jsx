import React from 'react';
import '../style/Menu.css'
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) =>(isActive ? " active" : "");

const Menu = () => {
    return (
        <ul className='ul-style'>
            <li><NavLink className={`a-style ${setActive}`} to='virtual-dom'>Virtual DOM</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='components'>Components</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='props'>Props</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='state'>State</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='life-cycle'>Lifecycle</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='events'>Events</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='keys'>Key</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='refs'>Refs</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='fragments'>Fragment</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='react-memo'>React.memo</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='use-effect'>useEffect</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='context'>useContext</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='form'>Form</NavLink></li>
            <li><NavLink className={`a-style ${setActive}`} to='router'>Router</NavLink></li>
        </ul>
    );
};

export default Menu;
