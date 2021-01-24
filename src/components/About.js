import React, { Component } from 'react';

class About extends Component {
    checkScreenSize = () => {
        console.log(window.screen.width)
        if (window.screen.width >=450) {
            return <div className="bio">
            <p>As a creative and enthusiastic full stack developer, I'm passionate about building high-quality, user-friendly applications. My background in marketing provides me with unique insights into the customer experience, enabling me to design, develop, and present to a diverse audience. </p>
            <p>Currently, I work as a technical project manager and software engineer for a cybersecurity company, which specializes in application security and reverse engineering services. I manage the end-to-end engagement life-cycle for our consultants and clients, while utilizing my programming background to automate and optimize our processes and platforms.</p>
            <p>I’m interested in challenging and rewarding opportunities that empower and foster stewardship, where I can cultivate my skills and thrive as a software developer.</p>
        </div>
        } else {
            return <div className="mobile-bio">
                        <p>As a creative and enthusiastic full stack developer, I'm passionate about building high-quality, user-friendly applications. My background in marketing provides me with unique insights into the customer experience, enabling me to design, develop, and present to a diverse audience. </p>
                        <p>Currently, I work as a technical project manager and software engineer for a cybersecurity company, which specializes in application security and reverse engineering services. I manage the end-to-end engagement life-cycle for our consultants and clients, while utilizing my programming background to automate and optimize our processes and platforms.</p>
                        <p>I’m interested in challenging and rewarding opportunities that empower and foster stewardship, where I can cultivate my skills and thrive as a software developer.</p>
                    </div>
        }
    }

    render() {
        return (
            <div className="about-container">
                <h1 className="about-me">About Me</h1>
                <div className="about-info">
                    <div className="prof-pic">
                        <img className="prof-pic" src="https://res.cloudinary.com/dsnhxcw0e/image/upload/v1575234478/Profile-photo_siez95.jpg" alt="Desiree deWysocki" />
                    </div>
                    {this.checkScreenSize()}
                </div>
            </div>
        )
    }
}

export default About