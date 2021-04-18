import React from 'react';
import hair from '../../../image/h-hair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'750px'}} className="row d-flex align-items-center bg-color">
            <div className="col-md-4 offset-md-1">
                <p>Spa & Beauty Center </p>
                <h1>Best Treatment</h1>
                <br/>
                <h1>Place For You</h1>
                <button className="button-primary m-3">Make Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={hair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;