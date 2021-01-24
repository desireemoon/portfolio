import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// This component handles our login form and has a link to the register form
const Contact = (props) => {
    return (
        <div className="contact-container">
            <div className="social-title">
                <h2 className="contact-h2">Connect with the programmer</h2>
                <p>If you'd like to get in contact with me, check out the links below or click the email link to message me directly: </p>
            </div>
            <div className="social-container">
            <div className="social-links"> 
                <a className="social-links" href="https://www.linkedin.com/in/desiree-dewysocki">LinkedIn</a>
            </div>
            <div className="social-links"> 
                <a className="social-links" href="https://github.com/desireemoon">Github</a>
            </div>
            <div className="social-links"> 
                <a className="social-links" href="mailto:desiree.dewysocki@gmail.com">Email</a>    
            </div>
            </div>
        </div>
    );
}

export default Contact;