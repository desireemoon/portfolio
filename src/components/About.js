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
                    <p>I’m a highly analytical, creative, and adaptable full stack developer with a passion for making applications with high-quality style and functionality. My background in marketing provides me with unique insights into the user experience, which enables me to design, program, and present to the appropriate audience in mind. I’m interested in opportunities where I can grow both technically and professionally, while contributing towards a positive and impactful experience.</p>
                    <p>Hi my name is Desiree deWysocki and I graduated May 2017 from SUNY Purchase College with a double major in Economics and Arts Management. After graduating, I worked at a fintech startup and American Express in their marketing departments. After almost two years in marketing, I realized that I wasn't happy and knew I had to make a change. I had friends who were programmers and loved what they did, so I decided to teach myself, while I figured out my next steps. As I started to learn the syntax and logic behind programming, I also came to realize that I was filled with the passion I was missing in my prior jobs. Thats when I decided to make the career switch and I haven't looked back since. I am looking to grow my skills so that I can obtain a full time software engineering position, where I can be challenged and make a positive impact in the company.</p>
                </div>
            </div>
        </div>
    )
}

export default About