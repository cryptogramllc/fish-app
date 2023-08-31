import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.scss";
const Header = (props) => {
    const { items } = props;
    return (
        <div className='header'>
            <div className='logo'> <Link to="/">Home</Link> </div>
            <nav className='nav'>
                <ul>
                    {items && items.map((item, index) => (
                        <li key={index}>
                            <Link to={`/detailPage/${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
