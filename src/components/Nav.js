import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    return (
        <nav>
            <h3>Bad Jokes</h3>
            <ul className="nav-ul">
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="link" to='/categories'>Categories</Link>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav
