/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Address</h6>
                    <p>20, World Cup-ro 12-gil, Mapo-gu, Seoul</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>thehowl88@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+82 10 8288 2120</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/greatreseten" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://www.instagram.com/greatreset_/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="copy-right">
                <p>
                  Copyrightⓒ GDACS Holdings Co., Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
