import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="containerNavBar">
    <div className="NavBar">
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <div className="links">
        <Link to="/" className="books">Books</Link>
        <Link to="/Categories" className="categories">Catagories</Link>
      </div>
    </div>
  </div>
);

export default NavBar;
