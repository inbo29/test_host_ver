/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";


const NavbarFullMenuKor = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid align-items-center">
          <div className="logo">
            <Link href="/">
              <a>
                {theme ? (
                  theme === "light" ? (
                    <img src={appData.darkLogo} alt="logo" />
                  ) : (
                    <img src={appData.lightLogo} alt="logo" />
                  )
                ) : (
                  <img src={appData.lightLogo} alt="logo" />
                )}
              </a>
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">메뉴</span>
            </span>
          </div>
          <div className="submenu">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                한글
              </span>
              <div className="dropdown-menu">
                <Link href={`/eng`}>
                  <a className="dropdown-item">영어</a>
                </Link>
                <Link href={`/kor`}>
                  <a className="dropdown-item">한글</a>
                </Link>
              </div>
            </li>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href={`/kor/about`}>
                        <a className="link">
                          <span className="nm">01.</span>회사소개
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        
                        <span className="nm">02.</span>아티스트
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> 돌아가기
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/kor/about/artist/maniac`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>MAN1AC
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/kor/about/artist/uranus`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>오라노스(오양가)
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/kor/about/artist/minshik`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>민식
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        
                        <span className="nm">03.</span>마스코트
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> 돌아가기
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/kor/about/mascot/bayc`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>BAYC
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/kor/news`}>
                        <a className="link">
                          <span className="nm">04.</span>뉴스
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/kor`}>
                        <a className="link">
                          <span className="nm">05.</span>마켓
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/kor/contact`}>
                        <a className="link">
                          <span className="nm">06.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>연락처 :</h6>
                  <p>+82 10 8288 2120</p>
                </div>
                <div className="item">
                  <h6>주소 :</h6>
                  <p>
                    서울특별시 강남구 테헤란로 140 2층
                  </p>
                </div>
                <div className="item">
                  <h6>이메일 :</h6>
                  <p>
                    <a href="#0">thehowl88@gmail.com</a>
                  </p>
                </div>
                <div className="item">
                  <p>
                    Copyright©  GDACS 홀딩스. All rights reversed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenuKor;
