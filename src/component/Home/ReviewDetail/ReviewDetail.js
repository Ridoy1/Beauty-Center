import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="rounded-circle" style={{height: '50px'}} src={review.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{review.name}</h5>
            <p className="text-secondary pb-5">{review.description}</p>

        </div>
    );
};

export default ReviewDetail;