import React, { Component } from "react";
import "../Contacts/style.css";
import Rasmcha1 from "./img/github.png";
import Rasmcha2 from "./img/instagram.png";
import Rasmcha3 from "./img/telegram.png";
import Rasmcha4 from "./img/youtube.png";

export default class index extends Component {
  render() {
    return (
      <div className="Contacts">
        <div className="obshiy">
          <p className="contactsName">Contacts</p>
          <p className="forMe">
            You have a questions to me? <br />
            Your welcome!
          </p>
          <div className="linkedin">
            <a
              className="savca"
              href="http://t.me/kiyomoff7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send message!
            </a>
          </div>
        </div>
        <div className="sarafas">
          <a
            href="https://github.com/q0abd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rasmcha" src={Rasmcha1} alt="" />
          </a>
          <a
            href="https://www.instagram.com/abdulloh_0924/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rasmcha" src={Rasmcha2} alt="" />
          </a>
          <a
            href="https://t.me/kiyomoff7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rasmcha" src={Rasmcha3} alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCB0Ryoxqhqu_h_FBEY233Xg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="rasmcha" src={Rasmcha4} alt="" />
          </a>
        </div>
        <p className='theend'>Assalamu Aleikum <br /> va Rahmatullohi va Barokatuhu</p>
      </div>
    );
  }
}
