import React from 'react'

class Projects extends React.Component {

    render() {
        return (
            <div class="container project-page">
                <div class="projects-main-content center">
                    <h1 class="white-text">Projects Page</h1>
                </div>
                <div class="projects">
                    <div class=" project project1" >
                        <div className="project1-text right-align">
                            <h4 class="white-text ">
                                Gigfreq
                            </h4>
                            <h2 class="white-text">Concert Tracking App</h2>
                            <p class="white-text">This is a simple concert tracker!</p>
                        </div>
                    </div>
                    <div class="project project2">
                        <div className="project2-text right-align">
                            <h4 class="white-text ">
                                Record Collector
                            </h4>
                            <h2 class="white-text">Record Collecting App</h2>
                            <p class="white-text">This is a record collecting app!</p>
                        </div>
                    </div>
                    <div class="project project3">
                        <div className="project3-text right-align">
                            <h4 class="white-text ">
                                Quiz-It!
                            </h4>
                            <h2 class="white-text">A Fun Trivia App</h2>
                            <p class="white-text">Come test your knowledge!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects