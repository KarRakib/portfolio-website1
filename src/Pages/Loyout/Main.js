import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';
import Navbar from '../Sheared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;