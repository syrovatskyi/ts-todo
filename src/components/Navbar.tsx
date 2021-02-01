import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper teal darken-2 nav-div">
                <a href="/" className="brand-logo">TS React</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                      <NavLink to="/">To-do list</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar
