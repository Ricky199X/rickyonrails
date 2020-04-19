import React from 'react'

const AboutPage = () => {
    return (
        <div class="container project-page">

            <div class="about-page-header center">
                <h1 class="white-text">About Me</h1>
            </div>

            <section id="about">
                <div class="container">
                    <div class="row">
                        <div class="col s12 center">
                            <div class="ricky-picture">
                                <img class="circle responsive-img" src={require("../assets/download.jpg")} width="500" height="500" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default AboutPage