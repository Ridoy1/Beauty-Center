import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-color">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Mixlax<br/><small>Beauty, Spa Center</small></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active mr-5" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active mr-5" aria-current="page" to="/AddEvents">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active mr-5" aria-current="page" to="/product">Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active mr-5" aria-current="page" to="/login">Login</Link>
                    </li>
                    
                </ul>
                <form class="d-flex m">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;