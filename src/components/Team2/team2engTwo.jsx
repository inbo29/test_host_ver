/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image"
import Bayc from "../../../public/img/team/4_team.png"
// import Maniac from "../../../public/img/team/1_team.jpg"
// import Uranus from "../../../public/img/team/2_team.jpg"
// import Minshik from "../../../public/img/team/3_team.jpg"

const Team2engTwo = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">
                Mascot
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Link href="/eng/about/mascot/bayc">
            <div className="item cir md-mb50">
              <div className="img">
                <Image
                  src={Bayc}
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
                  <h6>BAYC</h6>
                  <span>MASCOT</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>BAYC</h3>
                    <p>MASCOT</p>
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

export default Team2engTwo;
