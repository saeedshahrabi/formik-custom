import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <>
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
       
              <li className="nav-item">
              <NavLink  activeClassName="active" to="/form" exact>
                فرم   
                 </NavLink>
                 </li>
                 <li  className="nav-item">
                 <NavLink  activeClassName="active" to="/calender" exact>
                 تقویم  
                 </NavLink>
                 </li>
          
              <li className="nav-item">
              <NavLink  activeClassName="active" to="/forms" exact>
             فرم 2
                 </NavLink>
              </li>
              <li className="nav-item">
              <NavLink  activeClassName="active" to="/" exact>
            فرمیک
                 </NavLink>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        
      </>
    );
  }
}

export default Header;
