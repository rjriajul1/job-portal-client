import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/header/Navbar';
import Footer from '../pages/shared/footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;