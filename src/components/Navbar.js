import React from 'react';
import { Link } from 'react-router-dom';
import userImage from '../assets/user2.png';

const Navbar = () => (
  <div className="divnavbar">
    <div>
      <nav className="navbar">
        <span className="sitename montserrat">Bookstore CMS</span>
        <Link to="/" className="montserrat">BOOKS</Link>
        <Link to="/categories" className="montserrat">CATEGORIES</Link>
      </nav>
    </div>
    <img className="userimg" src={userImage} alt="Account user" width="22" height="22" />
  </div>
);

export default Navbar;
