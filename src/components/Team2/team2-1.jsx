/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Team2 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">
                Artists
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Link
              href={'/about/artist/maniac'}
            >
              <div className="item cir md-mb50">
                <div className="img">
                  <img src="/img/team/3-1.jpg" alt="" />
                  <div id="circle1">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="300px"
                      height="300px"
                      viewBox="0 0 300 300"
                      enableBackground="new 0 0 300 300"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <path
                          id="circlePath1"
                          d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none" />
                      <g>
                        <use xlinkHref="#circlePath1" fill="none" />
                        <text fill="#fff">
                          {/* <textPath xlinkHref="#circlePath1">
                            Maniac Maniac Maniac Maniac
                          </textPath> */}
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="info">
                    <h6>MAN1AC</h6>
                    <span>Rapper</span>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="text-center">
                    <a>
                      <h3>Maniac</h3>
                      <p>Legend of Underground Hip Hop</p>
                    </a>
                  </div>
                </div>
                {/* <div className="item m-3">
                  <div className="social text-center">
                    <a href="#0">
                      <i className="fab fa-facebook-f mx-2"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram mx-2"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-twitter mx-2"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
          <Link
              href={'/about/artist/uranus'}
            >
              <div className="item cir md-mb50">
                <div className="img">
                  <img src="/img/team/2.jpg" alt="" />
                  <div id="circle1">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="300px"
                      height="300px"
                      viewBox="0 0 300 300"
                      enableBackground="new 0 0 300 300"
                      xmlSpace="preserve"
                    >
                      <defs>
                        <path
                          id="circlePath1"
                          d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                        />
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none" />
                      <g>
                        <use xlinkHref="#circlePath1" fill="none" />
                        <text fill="#fff">
                          {/* <textPath xlinkHref="#circlePath1">
                            Uranus Uranus Uranus Uranus
                          </textPath> */}
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="info">
                    <h6>Uranus</h6>
                    <span>Singer</span>
                  </div>
                </div>
                <div className="item m-3">
                  <div className="text-center">
                    <a>
                      <h3>Uranus</h3>
                      <p>Musician from Mongolia</p>
                    </a>
                  </div>
                </div>
                {/* <div className="item m-3">
                  <div className="social text-center">
                    <a href="#0">
                      <i className="fab fa-facebook-f mx-2"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram mx-2"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-youtube mx-2"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;
