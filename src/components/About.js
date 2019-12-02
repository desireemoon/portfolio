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
                    <p>     Hi my name is Desiree deWysocki full stack developer with a passion for making applications with high-quality style and functionality. I didn't always know I wanted to code, but the path that led me here has made me a better and more thoughtful programmer.</p>
                    <p>     Prior to switching to software engineering, I worked for multiple startups and American Express in their marketing departments. Although marketing allowed for some creativity, it lacked the opportunity to create something tangible that had a direct postive impact on others. After almost two years in marketing, I realized that I wasn't happy and needed to make a change.</p> 
                    <p>     While figuring out my next steps, I was encouraged to pursue software engineering from friends working in the field. Based off of their excitement and satisfaction, I decided to delve into the world of code. As I started to learn the syntax and logic behind programming, I came to realize that it filled me with the passion my prior jobs lacked. Thats when I decided to make the career switch, enroll in the software engineering program at General Assembly, and I haven't looked back since. I am looking for opportunities where I can grow both technically and professionally, while contributing towards a positive and impactful experience.</p>
                </div>
            </div>
        </div>
    )
}

export default About