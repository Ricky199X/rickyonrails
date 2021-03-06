import React from 'react'

const AboutPage = () => {
    return (
        <div class="container about-page fixed">
            <section id="about">

                <div class="about-page-header center">
                    <h1 class="white-text">About Me</h1>
                </div>

                <div class="about-container">
                    <div class="row">
                        <div class="col s12 center">
                            {/* Headshot + Title */}
                            <div class="ricky-picture">
                                <img class="circle responsive-img" src={require("../assets/download.jpg")}
                                    width="400"
                                    height="400"
                                />
                            </div>
                            <h1 class="white-text">Ricky Rojas</h1>
                            <h3 class="white-text bold">Software Engineer</h3>

                            {/* About Blurb */}
                            <p class="white-text flow-text">Hi, I'm Ricky! I'm a Brooklyn-based software engineer with experience in Ruby on Rails, JavaScript, React.js, and Redux.
                            I am a lifelong tech enthusiast who loves to build products and immersive experiences for others.
                            I am currently looking for an opportunity to work with like-minded individuals
                            where I can continue to learn and grow as a tech professional.
                            Drawing on my background in music, I leverage my creativity and engineering skills
                            to bring my visions to life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section class="section section-skills fixed" id="skills">
                <h1 class="white-text center">Developer Toolkit</h1>

                <div class="skills-container">
                    <div class="row text-center center">
                        <div className="col s12 l3">
                            <span class="js">
                                <i class="fab fa-js-square white-text fa-4x waves-effect waves-light"></i>
                                <p class="white-text">JavaScript</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="node-js">
                                <i class="fab fa-node-js white-text fa-4x"></i>
                                <p class="white-text">Node JS</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="react">
                                <i class="fab fa-react white-text fa-4x"></i>
                                <p class="white-text">React.js</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="ruby">
                                <i class="devicon-ruby-plain"></i>
                                <p class="white-text">Ruby</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="rails">
                                <i class="devicon-rails-plain"></i>
                                <p class="white-text">Rails</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="HTML">
                                <i class="fab fa-html5 white-text fa-4x"></i>
                                <p class="white-text">HTML 5</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="CSS">
                                <i class="fab fa-css3-alt white-text fa-4x"></i>
                                <p class="white-text">CSS 3</p>
                            </span>
                        </div>
                        <div className="col s12 l3">
                            <span class="git">
                                <i class="fab fa-git-alt white-text fa-4x"></i>
                                <p class="white-text">Git</p>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage