import React from 'react';
import face from '../../../image/about-img-1-1.jpg';
import './HeaderAboutUs.css';

const HeaderAboutUs = () => {
    return (
        <section className="row d-flex align-items-center mt-5">
            <div className="col-md-4 offset-md-1">
                <img src={face} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6 ml-5">
                <p>We Have <span className="text-year">25 Years</span> Of Experience</p>
                <div className="d-flex"> 
                    <h1 className="learn-text">Learn More</h1>
                    <h3 className="text-color ml-3">About <br/><span>Us</span></h3>
                </div>
                <h4 className="text_about">Our fitness centre is one of the best in London and is equipped with the latest cutting edge equipment</h4>
                <div className="d-flex mt-3">
                    <div className="line"></div>
                    <div className="m-4">
                        <p className="text-secondary">A range of different massage techniques, reflexology, body scrubs and facial are available on-site which will help you unwind, relax and rejuvenate from the hustle and bustle of daily life.</p>
                    </div>
                </div>
                <h5 className="text-secondary">Our Siam Thai Spa centre is run independently by a leading Thai wellness company ensuring uncompromising quality.</h5>
            </div>
        </section>
    );
};

export default HeaderAboutUs;