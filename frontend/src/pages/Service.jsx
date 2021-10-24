import React, { Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Header/sub-component/Navbar/Navbar';
import Topbar from '../component/Header/sub-component/Topbar/Topbar';
import Services from '../component/Service/Services';
const Service = () => {
    return (
        <Fragment>
            <Topbar />
            <Navbar />
            <Services />
            <Footer />
        </Fragment>
    );
};

export default Service;