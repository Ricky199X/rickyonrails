import React from 'react'
import M from 'materialize-css'

const Footer = () => {

    return (
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Ricky Rojas &copy; 2020</h5>


                    </div>

                    <div class="col l6 s12">
                        <ul class="list-inline">
                            <li>
                                <a href="https://twitter.com/rickyonrails"
                                    target="https://twitter.com/rickyonrails"
                                    class="white-text">
                                    <i class="fab fa-twitter fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                    target="https://www.linkedin.com/in/ricky-rojas-92096965/"
                                    class="white-text">
                                    <i class="fab fa-linkedin fa-2x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Ricky199X"
                                    target="https://github.com/Ricky199X"
                                    class="white-text">
                                    <i class="fab fa-github fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Ricky Rojas &copy; 2020

{/* <div className="col offset-l12">
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>

                        // </div> */}
export default Footer