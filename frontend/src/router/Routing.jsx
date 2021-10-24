import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import AppointmentForm from '../pages/AppointmentForm';
import Authication from '../pages/Authication';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import NotMatch from '../pages/NotMatch';
import Service from '../pages/Service';
const Routing = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/about">
                        <AboutUs />
                    </Route>
                    <Route path="/appointment">
                   <AppointmentForm />
                    </Route>
                    <Route path="/service">
                        <Service />
                    </Route>
                    <Route path="/login">
                        <Authication />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>

            </Router>
        </div>
    );
};

export default Routing;