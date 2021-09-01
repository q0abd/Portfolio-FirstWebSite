import React, { Component } from "react";
import "../AboutMe/style.css";

export default class index extends Component {
  render() {
    return (
      <div className="aboutMe">
        <p className="AboutMep">About Me</p>
        <div className="aboutContent">
          <p className='aaasss'>
              <br /><br />
            Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in design
            and everything connected with it. <br /><br /> I'm studying at courses "Web and
            mobile design interfaces" in IT-Academy. <br /><br />  Ready to implement <br />
            excellent projects with wonderful people.
          </p>
          {/* <p className='aboutHuman'>
            Hi I'm a Front-End Web-Developer from Tashkent. <br />
            I'm intersted in coding and everything connected with!
          </p>
          <p className='aboutHuman'>
            And I'm studying at courses "FrontEnd <br /> Web-Developer" in
            PDP-IT Academy
          </p>
          <p className='aboutHuman'>
            I am ready to create projects and <br /> work in large IT companies
            InshaAllah
          </p> */}
        </div>
      </div>
    );
  }
}
