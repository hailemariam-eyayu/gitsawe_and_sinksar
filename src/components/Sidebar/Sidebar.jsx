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
          <NavLink className="sidebar-option" to="/sinksar">ስንክሳር</NavLink>
          <NavLink className="sidebar-option" to="/bahirehasab">ባሕረ ሃሳብ</NavLink>
          <NavLink className="sidebar-option" to="/gitsawie">ግጻዌ</NavLink>
          <NavLink className="sidebar-option" to="/wudasie">ቅዳሴ ማርያም</NavLink>
          <NavLink className="sidebar-option" to="/bible">መጽሐፍ ቅዱስ</NavLink>
          <NavLink className="sidebar-option" to="/seatat">ሰአታት</NavLink>
          <NavLink className='sidebar-option' to="/hibuat">በእንተ ትምኅርተ ኅቡዓት</NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
