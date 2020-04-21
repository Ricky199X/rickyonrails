import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldRedirect: false
        }
    }

    // check for if redirect should occur
    // componentDidUpdate(prevProps) {
    //     if (!prevProps && this.props.user.loggedIn) {
    //         this.setState({
    //             shouldRedirect: true
    //         })
    //     }
    // }

    // componentDidMount() {
    //     console.log(this.state)
    // }

    render() {


        return (
            <div class="text-align center">
                <div class="home-container">
                    <h1 class="home-message pulse" id="home-message">Welcome!</h1>
                    <a class="btn-floating btn-large cyan lighten-4 pulse"><i class="material-icons black-text">double_arrow</i></a>
                </div>
            </div>

        )
    }

}

export default Home