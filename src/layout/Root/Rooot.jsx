import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../pages/shared/Nav/Nav';
import Footer from '../../pages/shared/Footer/Footer';


const Rooot = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Rooot;