import React, { Fragment } from 'react';
import Navbar from './sub-component/Navbar/Navbar';
import Topbar from './sub-component/Topbar/Topbar';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <Fragment>
            <Topbar />
            <Navbar />
            <Banner />
        </Fragment>
    );
};

export default Header;