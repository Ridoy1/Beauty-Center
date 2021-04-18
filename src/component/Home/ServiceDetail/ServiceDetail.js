import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
            <div className="pb-5">
                <Link to="/booking"><button>Explare more</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;