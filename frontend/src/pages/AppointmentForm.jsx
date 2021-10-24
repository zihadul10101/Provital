import React, { Fragment } from 'react';
import TopBar from '../component/Header/sub-component/Topbar/Topbar';
import NavBar from '../component/Header/sub-component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Appointment from '../component/Service/Appointment';
const AppointmentForm = () => {
    return (
        <Fragment>
            <TopBar />
            <NavBar />
            <Appointment />
            <Footer />
        </Fragment>
    );
};

export default AppointmentForm;