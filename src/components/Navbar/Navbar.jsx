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
            <NavLink to="/" onClick={closeMenu}>
                <img
                    className="logo"
                    src={assets.logo}
                    alt="Logo"
                    style={{ width: '40px', height: 'auto' }}
                />
            </NavLink>

            {/* Links */}
            <div className={`navlinks ${menuOpen ? 'show' : ''}`}>
                <NavLink className='navlinks-link' to="/sinksar" onClick={closeMenu}>ስንክሳር</NavLink>
                <NavLink className='navlinks-link' to="/bahirehasab" onClick={closeMenu}> ባሕረ ሃሳብ</NavLink>
                <NavLink className='navlinks-link' to="/gitsawie" onClick={closeMenu}>ግጻዌ</NavLink>
                <NavLink className='navlinks-link' to="/wudasie" onClick={closeMenu}>ውዳሴ ማርያም</NavLink>
                <NavLink className='navlinks-link' to="/bible" onClick={closeMenu}>መጽሐፍ ቅዱስ</NavLink>
                <NavLink className='navlinks-link' to="/seatat" onClick={closeMenu}>ሰአታት</NavLink>
                <NavLink className='navlinks-link' to="/hibuat" onClick={closeMenu}>በእንተ ትምኅርተ ኅቡዓት</NavLink>
            </div>

            {/* Menu Icon */}
            <img
                className="profile"
                src={assets.menu_icon}
                alt="menu"
                onClick={toggleMenu}
            />
        </div>
    );
};

export default Navbar;
