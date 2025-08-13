import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button - visible only on mobile */}
      <div className="sidebar-toggle sidebar-options" onClick={toggleSidebar}>
        <img src={assets.menu_icon} alt="menu" />
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className={`sidebar-options ${isOpen ? 'show' : ''}`}>
          <NavLink className="sidebar-option" to="/sinksar">Sinksar</NavLink>
          <NavLink className="sidebar-option" to="/bahirehasab">Bahire Hasab</NavLink>
          <NavLink className="sidebar-option" to="/gitsawie">Gitsawe</NavLink>
          <NavLink className="sidebar-option" to="/wudasie">Wudasie Maryam</NavLink>
          <NavLink className="sidebar-option" to="/bible">Bible</NavLink>
          <NavLink className="sidebar-option" to="/seatat">Seatat</NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
