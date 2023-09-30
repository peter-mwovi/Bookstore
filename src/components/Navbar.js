import React from 'react';
import { Link } from 'react-router-dom';
import userImage from '../assets/user2.png';

const Navbar = () => (
  <div className="divnavbar">
    <div>
      <nav className="navbar">
        <span className="sitename">Bookstore CMS</span>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
    <img className="userimg" src={userImage} alt="Account user" width="22" height="22" />
  </div>
);

export default Navbar;
