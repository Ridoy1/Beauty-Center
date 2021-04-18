import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import HeaderAboutUs from '../HeaderAboutUs/HeaderAboutUs';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <HeaderMain/>
            <HeaderAboutUs/>
        </div>
    );
};

export default Header;