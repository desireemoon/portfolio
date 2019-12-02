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
                    <p>     Hi my name is Desiree deWysocki full stack developer with a passion for making applications with high-quality style and functionality. I didn't always know I want to code, but the path that led me here has made me a better and more thoughful programmer.</p>
                    <p>     Prior to switching to software engin, I worked at a multiple startups and American Express in their marketing departments. Although marketing allowed for some creativity, it lacked the opportunity for me to create something tangible that had a direct postive impact on others.After almost two years in marketing, I realized that I wasn't happy and knew I had to make a change.</p> 
                    <p>     I had friends who were programmers and loved what they did, so I decided to teach myself, while I figured out my next steps. As I started to learn the syntax and logic behind programming, I also came to realize that I was filled with the passion I was missing in my prior jobs. Thats when I decided to make the career switch and I haven't looked back since. I am looking for opportunities where I can grow both technically and professionally, while contributing towards a positive and impactful experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About