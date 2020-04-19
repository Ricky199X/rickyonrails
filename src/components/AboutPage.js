import React from 'react'

const AboutPage = () => {
    return (
        <div class="container about-page">

            <div class="about-page-header center">
                <h1 class="white-text">About Me</h1>
            </div>

            <section id="about">
                <div class="container">
                    <div class="row">
                        <div class="col s12 center">

                            {/* Headshot + Title */}
                            <div class="ricky-picture">
                                <img class="circle responsive-img" src={require("../assets/download.jpg")} width="400" height="400" />
                            </div>
                            <h3 class="white-text">Ricky Rojas</h3>
                            <p class="white-text">Software Engineer</p>

                            {/* About Blurb */}
                            <p class="white-text">Hi, I'm Ricky, a Software Engineer with experience in Ruby on Rails, JavaScript, React.js, and Redux.
                            I am a lifelong tech enthusiast who loves to build products and immersive experiences for others. I am currently looking for an opportunity to work with like-minded individuals where I can continue to learn and grow as a tech professional.
                            Drawing on my background in music, I leverage my creativity and engineering skills to bring my visions to life.
                            </p>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default AboutPage