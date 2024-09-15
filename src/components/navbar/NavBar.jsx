import React, { useState } from 'react'
import './NavBar.scss'
import 'primeicons/primeicons.css';


export const NavBar = () => {
    const [showSide, setShowSide] = useState(false);

    const toggleMenu = () => {
        setShowSide(!showSide);
    };

    return (
        <div className='navbar-out-container'>
            <div className='navbar-logo-image-container'>
                {/* <img className='navbar-logo-image' src={require('../../assets/images/LogoAlaaEdited.png')} alt="" /> */}
                SyriaHotels
            </div>
            <div className='pi pi-align-justify' onClick={toggleMenu}></div>
            <ul className={`${showSide ? 'active' : ""} `}>
                <li>Damascus</li>
                <li>Lattakia</li>
                <li>Tartus</li>
                <li>Homs</li>
            </ul>
        </div>
    )
}

export default NavBar;
