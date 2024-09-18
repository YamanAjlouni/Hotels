import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';
import 'primeicons/primeicons.css';

export const NavBar = () => {
    const [showSide, setShowSide] = useState(false);
    const location = useLocation(); // Get the current location
    const navRef = useRef(null); // Create a ref for the nav container

    const toggleMenu = () => {
        setShowSide(!showSide);
    };

    const isActive = (path) => {
        const [basePath, query] = path.split('?');
        const currentPath = location.pathname;
        const currentQuery = location.search;

        return currentPath === basePath && currentQuery === (query ? `?${query}` : '');
    };

    // Handle clicks outside the nav container
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setShowSide(false);
        }
    };

    // Handle scroll events
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowSide(false);
        }
    };

    useEffect(() => {
        // Add event listeners when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!showSide) {
            // Delay removing the 'active' class to allow transition
            const timer = setTimeout(() => {
                navRef.current.classList.remove('show');
            }, 750); // Match the transition duration

            return () => clearTimeout(timer);
        }
    }, [showSide]);

    return (
        <div className='navbar-out-container' ref={navRef}>
            <div className='navbar-logo-image-container'>
                <Link to="/" className='navbar-logo-link'>
                    SyriaHotels
                </Link>
            </div>
            <div className='pi pi-align-justify' onClick={toggleMenu}></div>
            <ul className={`navbar-details ${showSide ? 'active' : ""} `}>
                <li className={isActive('/') ? 'active' : ''}>
                    <Link to="/" onClick={() => setShowSide(false)}>Home</Link>
                </li>
                <li className={isActive('/search-results?city=Damascus') ? 'active' : ''}>
                    <Link to="/search-results?city=Damascus" onClick={() => setShowSide(false)}>Damascus</Link>
                </li>
                <li className={isActive('/search-results?city=Lattakia') ? 'active' : ''}>
                    <Link to="/search-results?city=Lattakia" onClick={() => setShowSide(false)}>Lattakia</Link>
                </li>
                <li className={isActive('/search-results?city=Tartus') ? 'active' : ''}>
                    <Link to="/search-results?city=Tartus" onClick={() => setShowSide(false)}>Tartus</Link>
                </li>
                {/* <li><Link to="/search-results?city=Homs">Homs</Link></li> */}
            </ul>
        </div>
    );
};

export default NavBar;
