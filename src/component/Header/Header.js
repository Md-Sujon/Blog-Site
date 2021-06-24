import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitle">
             <span className="headerTitleSm">React JS</span>
             <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImage" src="https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg" alt="" />
            
        </div>
    );
};

export default Header;