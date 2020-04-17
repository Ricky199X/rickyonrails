import React from 'react'

const Contact = () => {
    return (
        <div class="contact-page-container">
            <div class="message-container ">
                <h1 class="center-align white-text">Contact</h1>
                <h3 class="center-align white-text">Want to chat? Let's connect!</h3>
            </div>
            <div class="icons">

                <div class="row">
                    <div className="col s12">

                        {/* Icons Container */}
                        <div class="icons-container black">
                            <a href="https://twitter.com/rickyonrails"
                                target="https://twitter.com/rickyonrails"
                                class="white-text">
                                <i class="fab fa-twitter fa-4x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                target="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                class="white-text">
                                <i class="fab fa-linkedin fa-4x"></i>
                            </a>
                            <a href="https://github.com/Ricky199X"
                                target="https://github.com/Ricky199X"
                                class="white-text">
                                <i class="fab fa-github fa-4x"></i>
                            </a>

                            <a href="https://medium.com/@rickyrojas19"
                                target="https://medium.com/@rickyrojas19"
                                class="white-text">
                                <i class="fab fa-medium fa-4x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact