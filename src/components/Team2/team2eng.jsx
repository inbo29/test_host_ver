/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image"
import Maniac from "../../../public/img/team/1_team.jpg"
import Uranus from "../../../public/img/team/2_team.jpg"
import Minshik from "../../../public/img/team/3_team.jpg"

const Team2eng = () => {
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
            <Link href="/eng/about/artist/maniac">
            <div className="item cir md-mb50">
              <div className="img">
                <Image
                  src={Maniac}
                  alt="picture of maniac"
                />
                {/* <img src="/img/team/1.png" alt="" /> */}
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
                      {/* <text fill="#fff">
                        <textPath xlinkHref="#circlePath1">
                          Maniac Maniac Maniac Maniac Maniac
                        </textPath>
                      </text> */}
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
                    <h3>MAN1AC</h3>
                    <p>Legend of Underground Hip Hop</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/eng/about/artist/uranus">
            <div className="item cir md-mb50">
              <div className="img">
                <Image
                  src={Uranus}
                  alt="picture of uranus"
                />
                {/* <img src="/img/team/2_team.jpg" alt="" /> */}
                <div id="circle2">
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
                        id="circlePath2"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath2" fill="none" />
                      {/* <text fill="#fff">
                        <textPath xlinkHref="#circlePath2">
                          Uranus Uranus Uranus Uranus Uranus 
                        </textPath>
                      </text> */}
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
                    <p>Musician from mongolia</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/eng/about/artist/minshik">
            <div className="item cir md-mb50">
              <div className="img">
                <Image
                  src={Minshik}
                  alt="picture of minshik"
                />
                {/* <img src="/img/team/3_team.jpg" alt="" /> */}
                <div id="circle2">
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
                        id="circlePath2"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath2" fill="none" />
                      {/* <text fill="#fff">
                        <textPath xlinkHref="#circlePath2">
                          Uranus Uranus Uranus Uranus Uranus 
                        </textPath>
                      </text> */}
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>Minshik</h6>
                  <span>Rapper</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>Minshik</h3>
                    <p>Musician from USA</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2eng;
