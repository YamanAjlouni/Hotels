import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import 'primeicons/primeicons.css';

export const NavBar = () => {
    const [showSide, setShowSide] = useState(false);

    const toggleMenu = () => {
        setShowSide(!showSide);
    };

    return (
        <div className='navbar-out-container'>
            <div className='navbar-logo-image-container'>
                <Link to="/" className='navbar-logo-link'>
                    SyriaHotels
                </Link>
            </div>
            <div className='pi pi-align-justify' onClick={toggleMenu}></div>
            <ul className={`${showSide ? 'active' : ""} `}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search-results?city=Damascus">Damascus</Link></li>
                <li><Link to="/search-results?city=Lattakia">Lattakia</Link></li>
                <li><Link to="/search-results?city=Tartus">Tartus</Link></li>
                {/* <li><Link to="/search-results?city=Homs">Homs</Link></li> */}
            </ul>
        </div>
    );
};

export default NavBar;
