"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <h1>SchoolExplorer</h1>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <div className="nav-left">
            <Link className='content' href="/addSchool">Add Schools</Link>
          </div>
          <div className="nav-right">
            <Link className='content' href="/findpage">Find Schools</Link>
            <Link className='content' href="/Data-list">Adedd Schools List</Link>
            <Link className='content' href="/Data-list">Sign-up</Link>
            <Link className='content' href="/Data-list">Login</Link>

          </div>
        </nav>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
        {isMenuOpen && (
          <select className="dropdown-menu" onChange={(e) => window.location.href = e.target.value}>
            <option  value="/addSchool">Add Schools</option> 
            <option value="/findpage">Find Schools</option>
            <option value="/DataAdedd"> Adedd Schools List</option>
          </select>
        )}
      </div>
    </header>
  );
};

export default Header;
