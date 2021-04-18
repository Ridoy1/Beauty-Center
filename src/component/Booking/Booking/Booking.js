import React from 'react';

const Booking = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-color p-5">
            
            <form action="">
                <h2>Book</h2>
                <br/>
                <input type="text" placeholder="Your Name"/>
                <br/>
                <br/>
                <input type="email" placeholder="Your Email"/>
                <br/>
                <br/>
                <button className="text-center pl-3 pr-3">Send</button>
            </form>
        </div>
    );
};

export default Booking;