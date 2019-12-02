import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="header-container">
            <div className="app-title">
                <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to="/portfolio" ><h1>Desiree deWysocki</h1></Link>
            </div>
            <div className="nav">
                <div className="nav-button ">
                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to="/portfolio">About</Link>
                </div>
                <div className="nav-button">
                    <Link onClick={() => { window.scrollTo(0, 0) }} className="link" to="/portfolio/projects">Projects</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;