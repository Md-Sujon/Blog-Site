import React from 'react';
import Header from '../../Header/Header';

import './Home.css';
import Posts from './Posts/Posts';
import Sidebar from './Sidebar/Sidebar';
const Home = () => {
    return (
        <>
          <Header></Header>
        <div className="home">
            <Posts></Posts>
            <Sidebar></Sidebar>
        </div>
        
        </>
    );
};

export default Home;