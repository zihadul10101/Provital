import React, { Fragment } from 'react';
import Header from '../component/Header/Header';
import CovidStacick from '../component/CovidStacick/CovidStacick';
import CovidTable from '../component/CovidTable/CovidTable';
import AboutCovid from '../component/AboutCovid/AboutCovid';
import Symptoms from '../component/Symptoms/Symptoms';
import Information from '../component/Information/Information';
import Doctors from '../component/Doctors/Doctors';
import Faq from '../component/Faq/Faq';
import Blog from '../component/Blog/Blog';
import Footer from '../component/Footer/Footer';
import Testimonal from '../component/Testimonial/Testimonal';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <CovidStacick />
            <CovidTable />
            <AboutCovid />
            <Symptoms />
            <Information />
            <Testimonal />
            <Doctors />
            <Faq />
            <Blog />
            <Footer />
        </Fragment>
    );
};

export default Home;