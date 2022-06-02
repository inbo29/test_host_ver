/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Team2Kor = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">
                아티스트
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <Link href="/kor/about/artist">
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
                    </g>
                  </svg>
                </div>
                <div className="info">
                  <h6>매니악</h6>
                  <span>래퍼</span>
                </div>
              </div>
              <div className="item m-3">
                <div className="text-center">
                  <a>
                    <h3>매니악</h3>
                    <p>레전드 of 언더그라운드 힙합</p>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/kor/about/artist">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/team/2.jpg" alt="" />
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
        </div>
      </div>
    </section>
  );
};

export default Team2Kor;
