import React, { Fragment } from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Header/sub-component/Navbar/Navbar';
import Topbar from '../component/Header/sub-component/Topbar/Topbar';
import Contact from '../component/Contact/Contact';

const ContactUs = () => {
    return (
      <Fragment>
          <Topbar />
          <Navbar />
       <Contact />
          <Footer />
      </Fragment>
    );
};

export default ContactUs;