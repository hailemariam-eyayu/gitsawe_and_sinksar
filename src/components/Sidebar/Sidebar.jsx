import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toggle button - visible only on mobile */}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={handleOverlayClick}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>የኢትዮጵያ ኦርቶዶክስ ተዋህዶ</h3>
          <p>የክርስቲያን ሥነ ጽሑፍ መጽሐፍት</p>
        </div>
        
        <div className="sidebar-options">
          <NavLink className="sidebar-option" to="/sinksar" onClick={() => setIsOpen(false)}>
            <span className="option-icon">📖</span>
            <span className="option-text">ስንክሳር</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/bahirehasab" onClick={() => setIsOpen(false)}>
            <span className="option-icon">📅</span>
            <span className="option-text">ባሕረ ሃሳብ</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/gitsawie" onClick={() => setIsOpen(false)}>
            <span className="option-icon">✝️</span>
            <span className="option-text">ግጻዌ</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/wudasie" onClick={() => setIsOpen(false)}>
            <span className="option-icon">🙏</span>
            <span className="option-text">ውዳሴ ማርያም</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/bible" onClick={() => setIsOpen(false)}>
            <span className="option-icon">📚</span>
            <span className="option-text">መጽሐፍ ቅዱስ</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/seatat" onClick={() => setIsOpen(false)}>
            <span className="option-icon">⏰</span>
            <span className="option-text">ሰአታት</span>
          </NavLink>
          
          <NavLink className="sidebar-option" to="/hibuat" onClick={() => setIsOpen(false)}>
            <span className="option-icon">👥</span>
            <span className="option-text">በእንተ ትምኅርተ ኅቡዓት</span>
          </NavLink>
        </div>
        
        <div className="sidebar-footer">
          <p>እግዚአብሔር ይባርክ</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;