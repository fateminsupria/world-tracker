import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg main-header">
        <div className="container-fluid main-box clearfix w-72">
            <h3 className="text-white">World Tracker</h3>
                <img style={{height:'80px'}} src={logo} alt=""/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{border:'3px solid white'}}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link ms-2" to="/">Countries</Link>
                    </li>
                </ul>
            </div>
            </div>
    </nav>
    );
};

export default Header;