/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image"
import Maniac from "../../../public/img/team/1_team.jpg"
import Uranus from "../../../public/img/team/2_team.jpg"
import Minshik from "../../../public/img/team/3_team.jpg"

const Team2Kor = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">
                CEO & 아티스트
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Link href="/kor/about/artist/maniac">
            <div className="item cir md-mb50">
              <div className="img">
                <Image
                  src={Maniac}
                  alt="picture of maniac"
                />
                {/* <img src="/img/team/1_team.jpg" alt="" /> */}
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
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>MAN1AC</h6>
                  <span>CEO & 래퍼</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>MAN1AC</h3>
                    <p>레전드 of 언더그라운드 힙합</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/kor/about/artist/uranus">
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
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>오라노스(오양가)</h6>
                  <span>가수</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>오라노스(오양가)</h3>
                    <p>최초로 한국에서 활동중인 몽골가수</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/kor/about/artist/minshik">
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
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>민식</h6>
                  <span>래퍼</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>민식</h3>
                    <p>떠오는 힙합씬 신예</p>
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

export default Team2Kor;
