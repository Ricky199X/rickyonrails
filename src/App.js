import React from 'react';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Imported Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Contact from './components/Contact'
import AboutPage from './components/AboutPage'
import Projects from './components/Projects'
import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="page-container">
          <Navbar />
          <Switch>
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>

        {/* <div>
          <Footer />
        </div> */}
        <Footer />
      </Router>
    )
  }
}

export default App;
