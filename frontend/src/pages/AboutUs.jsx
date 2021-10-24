import React, { Fragment } from 'react';
import About from '../component/About/About';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Header/sub-component/Navbar/Navbar';
import Topbar from '../component/Header/sub-component/Topbar/Topbar';

const AboutUs = () => {
    return (
       <Fragment>
           <Topbar />
           <Navbar />
           <About />
           <Footer />
       </Fragment>
    );
};

export default AboutUs;