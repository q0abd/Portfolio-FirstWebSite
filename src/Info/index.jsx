import React, { Component } from "react";
import "../Info/style.css";
import Pacho from "../Info/pacho.png";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="aboutMeInInfo">
          <p className="name">
            Abdulloh <br /> Kiyomov
          </p>
          <p className="info">
            FrontEnd WEB-Developer <br />
            18 years old , Tashkent
          </p>
          <p className="rueng">
            ru | <p className="eng">eng</p>
          </p>
        </div>
        <div>
          <img src={Pacho} alt="Abdulloh Kiyomov" className="me" />
        </div>
      </div>
    );
  }
}
