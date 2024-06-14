import React from 'react';

const Header = () => {
  return (
    <div className="iq-top-navbar">
         <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
               <div className="iq-navbar-logo d-flex justify-content-between">
                     <a href="https://templates.iqonic.design/product/lite/socialv/html/dist/dashboard/index.html">
                        <img src="../../public/logo.png" className="img-fluid" alt=""/>
                        <span>Best Social Network</span>
                     </a>
                     <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                           <div className="main-circle"><i className="ri-menu-line"></i></div>
                        </div>
                     </div>
               </div>                  
            </nav>
         </div>
      </div>  
  );
}

export default Header;