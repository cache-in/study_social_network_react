import React from 'react';

const Sidebar = () => {
  return (
    <div className="iq-sidebar sidebar-default">
      <div className="sidebar_scrollbar" tabIndex="-1">
        <div className="scroll-content">
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                  <li className="">
                    <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/app/profile.html" className=" ">
                        <i className="las la-user"></i><span>Profile</span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/dashboard/index.html" className=" ">
                        <i className="las la-newspaper"></i><span>Messages</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/app/group.html" className=" ">
                        <i className="las la-users"></i><span>News</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/app/todo.html" className=" ">
                        <i className="las la-check-circle"></i><span>Music</span>
                    </a>
                  </li>
                  <li className=" ">
                    <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/dashboard/calendar.html" className=" ">
                        <i className="las la-calendar"></i><span>Settings</span>
                    </a>
                  </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>  
  );
}

export default Sidebar;