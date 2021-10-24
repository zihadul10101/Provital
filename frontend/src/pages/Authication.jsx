import React from 'react';
import SignIn from '../component/Authication/SignIn';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Header/sub-component/Navbar/Navbar';
import Topbar from '../component/Header/sub-component/Topbar/Topbar';

const Authication = () => {
    return (
        <div>
           <Topbar />
           <Navbar />
           <SignIn />
           <Footer /> 
        </div>
    );
};

export default Authication;