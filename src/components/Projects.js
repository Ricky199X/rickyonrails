import React from 'react'

class Projects extends React.Component {

    render() {
        return (
            <div class="container project-page">

                <div class="projects-main-content center">
                    <h1 class="white-text">Projects Page</h1>
                </div>
                <div class="projects">
                    <div class=" project project1 right-align" >
                        {/* Project 1 Text Items */}
                        <div class="project1-text">
                            <h4 class="white-text ">
                                Gigfreq
                            </h4>
                            <h2 class="white-text">Concert Tracking App</h2>
                            <p class="white-text">This is a simple concert tracker!</p>
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
                            <h2 class="white-text">Record Collecting App</h2>
                            <p class="white-text">This is a record collecting app!</p>
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
                            <h2 class="white-text">A Fun Trivia App</h2>
                            <p class="white-text">Come test your knowledge!</p>
                        </div>
                        {/* Project 3 Text Items End Here */}

                        <div class="external-icon-container">
                            <a href="https://github.com/Ricky199X/new-quiz-frontend"
                                target="https://github.com/Ricky199X/new-quiz-frontend"
                                class="black-text">
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