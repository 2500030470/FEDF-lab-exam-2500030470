import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Registration from "./Registration";
import UsersList from "./UsersList";
import ApiDemo from "./ApiDemo";
import './style.css'

const MainNavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          
          <ul className="nav-menu">

            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/registration" className="nav-link">
                Registration
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/userlist" className="nav-link">
                UsersList
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/apidemo" className="nav-link">
                ApiDemo
              </Link>
            </li>

          </ul>

        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/userlist" element={<UsersList />} />
        <Route path="/apidemo" element={<ApiDemo />} />
        
      </Routes>

    </div>
  );
};

export default MainNavBar;