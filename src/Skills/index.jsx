import React, { Component } from "react";
import "../Skills/style.css";
import Rasm from "./img/asd.png";
import Rasm2 from "./img/av.png";
import Rasm3 from "./img/Group.png";
import Rasm4 from "./img/Frame.png";
import Rasm5 from "./img/star.png";

export default class index extends Component {
  render() {
    return (
      <div className='Skills'>
        <div>
          <p className="skillsName">Skills</p>
          <p className="work">I work in such Pogramming languages as</p>
        </div>
        <div className="card-item">
          <div className="cards">
            <img src={Rasm} alt="" className="rasm1" />
            <p>##########</p>
            <img src={Rasm5} alt="" className='cardStar'/>
          </div>
          <div className="cards">
            <img src={Rasm3} alt="" className="rasm1" />
            <p>##########</p>
            <img src={Rasm5} alt="" className='cardStar'/>
          </div>
          <div className="cards">
            <img src={Rasm2} alt="" className="rasm1" />

            <p>##########</p>
            <img src={Rasm5} alt="" className='cardStar'/>
          </div>
          <div className="cards">
            <img src={Rasm4} alt="" className="rasm11" />
            <div className="infoCard">
              <p>##########</p>
              <img src={Rasm5} alt="" className='cardStar'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
