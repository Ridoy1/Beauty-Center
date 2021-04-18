import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://stark-woodland-81526.herokuapp.com/reviewData')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className="services-container mt-5">
            <div className="d-flex justify-content-center align-items-center pt-5"> 
                    <h1 className="learn-text text-center">Testimonials</h1>
            </div>
            
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        reviews.map(review => <ReviewDetail review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;