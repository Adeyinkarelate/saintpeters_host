import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'

const RoutLayout = () => {
    return (
        <div >
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RoutLayout;