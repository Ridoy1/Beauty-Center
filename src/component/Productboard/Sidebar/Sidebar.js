import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                <Link to='/addReview' className="text-white">
                    <span>Review</span>
                </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;