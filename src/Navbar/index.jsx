import React, { Component } from "react";
import './style.css'

export default class index extends Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='navbar-items'>
          <div className="item itemHome">Home <div className='setHome'></div></div>
          <div className="item">About Me</div>
          <div className="item">Skills</div>
          <div className="item">Portfolio</div>
          <div className="item">Contacts</div>
        </div>
      </div>
    );
  }
}
