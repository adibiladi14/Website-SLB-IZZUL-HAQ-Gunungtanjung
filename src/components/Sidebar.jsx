// src/components/Sidebar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
