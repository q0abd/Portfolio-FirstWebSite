import React, { Component } from 'react'
import './app.css'
import Navbar from './Navbar/index'
import Info from './Info/index'
import AboutMe from './AboutMe/index'
import Skills from './Skills/index'
import Portfolio from './Portfolio/index'
import Contacts from './Contacts/index'

export default class App extends Component {
  render() {
    return (
      <div className="builder">
        <Navbar />
        <Info />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contacts />
      </div>
    );
  }
}
