import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="top">
            <div className="topRight"></div>
            <div className="topCenter">
           <ul className="topList">
               <li className="topListItem">HOME</li>
               <li className="topListItem">ABOUT</li>
               <li className="topListItem">CONTACT</li>
               <li className="topListItem">WRITE</li>
               <li className="topListItem">LOGOUT</li>
               </ul> 
        </div>
        <div className="topLeft"></div>

        </div>
    );
};

export default Navbar;