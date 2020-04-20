import React from 'react'

class Projects extends React.Component {

    render() {
        return (
            <div class="container project-page">

                <div class="projects-main-content center">
                    <h1 class="white-text">Projects</h1>
                </div>

                <div class="projects">
                    <div class=" project project1 right-align" >
                        {/* Project 1 Text Items */}
                        <div class="project1-text">
                            <h4 class="white-text ">
                                Gigfreq
                            </h4>
                            <p class="white-text flow-text">
                                GigFreq is an app that helps connect music
                                lovers with their favorite bands and track upcoming concerts in their area.
                                Bands with administrator access can post their upcoming shows, track ticket sale metrics, and connect with their following.
                                This app utilizes object-oriented programming and technologies such as Ruby, Ruby on Rails, SQLite3, and Facebook user login functionality via Omniauth.
                            </p>
                        </div>
                        {/* Text Items End Here */}

                        <div class="external-icon-container ">
                            <a href="https://github.com/Ricky199X/gigfreq"
                                target="https://github.com/Ricky199X/gigfreq"
                                class="black-text">
                                <i class="fab fa-github fa-3x"></i>
                                <h5 class="white-text">Github</h5>
                            </a>
                        </div>
                    </div>


                    <div class="project project2 right-align">
                        {/* Project 2 Text Items */}
                        <div className="project2-text">
                            <h4 class="white-text ">
                                Record Collector
                            </h4>
                            <p class="white-text flow-text">
                                Record Collector is a multi-page Spotify clone built in March 2020 for my capstone project at Flatiron School.
                                Record Collector utilizes object-oriented programming and technologies such as React.js, Redux, Ruby on Rails, JavaScript, and SQLite3.
                                The application features the core functionalities present on Spotify.
                            </p>
                        </div>
                        {/* Project 2 Text Items End Here */}

                        <div class="external-icon-container">
                            <a href="https://github.com/Ricky199X/record-frontend"
                                target="https://github.com/Ricky199X/record-frontend"
                                class="black-text">
                                <i class="fab fa-github fa-3x"></i>
                                <h5 class="white-text">Github</h5>
                            </a>
                        </div>
                    </div>

                    <div class="project project3 right-align">
                        {/* Project 3 Text Items */}
                        <div className="project3-text">
                            <h4 class="white-text ">
                                Quiz-It!
                            </h4>
                            <p class="white-text flow-text">
                                Quiz-It! is a trivia application buit in January 2020 during my 4th module at Flatiron School.
                                This app features a JavaScript frontend with a Ruby on Rails api-only backend. This app utilizes a third-party API to acquire category
                                and quiz data along with an upvote system responsive to user input.
                            </p>
                        </div>
                        {/* Project 3 Text Items End Here */}

                        <div class="external-icon-container">
                            <a href="https://github.com/Ricky199X/new-quiz-frontend"
                                target="https://github.com/Ricky199X/new-quiz-frontend"
                                class="white-text">
                                <i class="fab fa-github fa-3x"></i>
                                <h5 class="white-text">Github</h5>
                            </a>
                        </div>
                    </div>
                </div>





            </div>
        )
    }
}


export default Projects