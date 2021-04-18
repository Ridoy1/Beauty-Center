import React from 'react';
import Footer from '../../shared/Footer/Footer';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <AppointmentFrom/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;