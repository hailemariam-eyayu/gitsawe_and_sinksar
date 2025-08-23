import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/admin_assets/assets.js';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className='navbar'>
            {/* Logo */}
            <NavLink to="/" onClick={closeMenu} className="logo-container">
                <img
                    className="logo"
                    src={assets.logo}
                    alt="Logo"
                />
                <span className="app-name">ግጻዌ</span>
            </NavLink>

            {/* Links */}
            <div className={`navlinks ${menuOpen ? 'show' : ''}`}>
                <NavLink className='navlinks-link' to="/sinksar" onClick={closeMenu} activeClassName="active">ስንክሳር</NavLink>
                <NavLink className='navlinks-link' to="/bahirehasab" onClick={closeMenu} activeClassName="active">ባሕረ ሃሳብ</NavLink>
                <NavLink className='navlinks-link' to="/gitsawie" onClick={closeMenu} activeClassName="active">ግጻዌ</NavLink>
                <NavLink className='navlinks-link' to="/wudasie" onClick={closeMenu} activeClassName="active">ውዳሴ ማርያም</NavLink>
                <NavLink className='navlinks-link' to="/bible" onClick={closeMenu} activeClassName="active">መጽሐፍ ቅዱስ</NavLink>
                <NavLink className='navlinks-link' to="/seatat" onClick={closeMenu} activeClassName="active">ሰአታት</NavLink>
                <NavLink className='navlinks-link' to="/hibuat" onClick={closeMenu} activeClassName="active">በእንተ ትምኅርተ ኅቡዓት</NavLink>
            </div>

            {/* Menu Icon */}
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            {/* Overlay for mobile menu */}
            {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </div>
    );
};

export default Navbar;