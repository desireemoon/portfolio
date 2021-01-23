import React from 'react'

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-me">About Me</h1>
            <div className="about-info">
                <div className="prof-pic">
                    <img className="prof-pic" src="https://res.cloudinary.com/dsnhxcw0e/image/upload/v1575234478/Profile-photo_siez95.jpg" alt="Photo of Desiree" />
                </div>
                <div className="bio">
                    <p>     I’m a highly analytical, creative, and adaptable full stack developer with a passion for building high-quality applications, rich in style and functionality. My background in the arts and marketing provides me with unique insights into the user experience, which enables me to design, develop, and present to a targeted or general audience. </p>
                    <p>     I’m currently a technical project manager / software engineer hybrid for a boutique cybersecurity consulting company, which specializes in application security and reverse engineering services. I manage the end-to-end engagement life-cycle for our consultants and clients, while utilizing my programming background to automate and optimize our processes and platforms.</p> 
                    <p>     I’m interested in continuing to cultivate my skills as a software developer in challenging environments that empowers and value stewardship.</p>
                </div>
            </div>
        </div>
    )
}

export default About