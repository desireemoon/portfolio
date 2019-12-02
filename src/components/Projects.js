import React from 'react'

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-header">Projects</h1>
            <div className="all-projects">
                <div className="project-box">
                    <a href="https://network-tracker.herokuapp.com/">
                        <div className="project-title">
                            <h3>Network Tracker</h3>
                        </div>
                        <div className="project-blurb">
                            <p>A responsive web application that allows users to create specific social networks and add people to them. Once registered and logged in, the User can create, update, and delete people and networks. The purpose of the app is to give users the ability to keep track of their social circles and the last time they've virtually and physically interacted with the people in their circles.</p>
                        </div>
                    </a>
                </div>
                <div className="project-box">
                    <a href="https://outfit-creator.herokuapp.com/">
                        <div className="project-title">
                            <h3>Outfit Creator</h3>
                        </div>
                        <div className="project-blurb">
                            <p>A responsive web application that allows user to create, show off, update, and delete clothing items and outfits. Users can add clothing items they've created to create or upate outfits. The purpose of this app is create a space where people can catologue or make a wishlist of clothes and outfits.</p>
                        </div>
                    </a>
                </div>
                <div className="project-box">
                    <a href="http://endangered-species-explorer.surge.sh/">
                        <div className="project-title">
                            <h3>Endangered Species Explorer</h3>
                        </div>
                        <div className="project-blurb">
                            <p>A web application where users can learn about endangered animals. Users are able to browse edngangered animals from a list or click the "random animal" button to go to a random animal page The purpose of this app is  to bring awareness to these endangered species and foster the urge to take action.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects