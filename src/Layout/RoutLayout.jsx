import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';

const RoutLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RoutLayout;