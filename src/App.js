import React from 'react';
import logo from './logo.svg';
import './App.css';
import M from 'materialize-css'


// Imported Components
import Navbar from './components/Navbar';
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <Navbar />
      // <Footer />
    )
  }
}

export default App;
