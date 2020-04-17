import React from 'react'

const Contact = () => {
    return (
        <div class="section white">
            <div class="container">
                <div class="row">
                    <div className="col s12">
                        <h3 class="center-align">Contact</h3>
                        <h3 class="center-align">Want to chat? Let's connect!</h3>

                        {/* Icons Container */}
                        <div class="icons-container">
                            <a href="https://twitter.com/rickyonrails"
                                target="https://twitter.com/rickyonrails"
                                class="black-text">
                                <i class="fab fa-twitter fa-4x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                target="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                class="black-text">
                                <i class="fab fa-linkedin fa-4x"></i>
                            </a>
                            <a href="https://github.com/Ricky199X"
                                target="https://github.com/Ricky199X"
                                class="black-text">
                                <i class="fab fa-github fa-4x"></i>
                            </a>

                            <a href="https://medium.com/@rickyrojas19"
                                target="https://medium.com/@rickyrojas19"
                                class="black-text">
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