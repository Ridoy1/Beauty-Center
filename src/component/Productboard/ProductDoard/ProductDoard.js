import React from 'react';
import AddReview from '../AddReview/AddReview';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const ProductDoard = () => {
    
    return (
        <div>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <AddReview/>
                </div>
            </div>
        </div>
    );
};

export default ProductDoard;