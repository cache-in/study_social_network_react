import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="iq-sidebar sidebar-default">
      <div className="sidebar_scrollbar" tabIndex="-1">
        <div className="scroll-content">
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                  <li className="active">
                    <NavLink to="/">
                        <i className="las la-user"></i><span>Profile</span>
                    </NavLink>                    
                  </li>
                  <li className="">
                    <NavLink to="/dialogs" >
                        <i className="las la-user"></i><span>Messages</span>
                    </NavLink>
                  </li>                  
              </ul>
            </nav>
        </div>
      </div>
    </div>  
  );
}

export default Sidebar;

