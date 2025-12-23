import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='navbar py-0'>
        <div className='logo'>Hepta</div>
        <ul className={`links ${isOpen ? "active" : ""}`}>
          {isOpen && (
            <button className='close-driver' onClick={closeMenu}>
              <FaTimes />
            </button>
          )}

          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/contacts', label: 'Contacts' },
            { path: '/hotel', label: 'Hotel' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/news', label: 'News' }
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='menue-bar' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      
    </>
  );
};

export default Navbar;

