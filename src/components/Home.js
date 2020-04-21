import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldRedirect: false
        }
    }

    handleRedirect = () => {
        this.setState({
            shouldRedirect: true
        })
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect to='/about' />
        } else {
            return (
                <div class="text-align center">
                    <div class="home-container">
                        <h1 class="home-message pulse" id="home-message">Welcome!</h1>
                        <button class="btn-floating btn-large cyan lighten-4 pulse" onClick={this.handleRedirect}>
                            <i class="material-icons black-text">double_arrow</i>
                        </button>
                    </div>
                </div>
            )
        }
    }

}

export default Home