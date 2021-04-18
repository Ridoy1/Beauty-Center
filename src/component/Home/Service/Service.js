import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://stark-woodland-81526.herokuapp.com/serviceData')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    return (
        <section className="services-container mt-5 bg-color">
            <div className="d-flex justify-content-center align-items-center pt-5"> 
                    <h1 className="learn-text">Relax Zone</h1>
                    <h3 className="text-color ml-3">Our <br/><span>Services</span></h3>
            </div>
            <p className="text-center pt-3 text-secondary">Access to our fitness centre and pool is free to all our hotel guests. For <br/> non-guests membership packages are available.</p>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        events.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;