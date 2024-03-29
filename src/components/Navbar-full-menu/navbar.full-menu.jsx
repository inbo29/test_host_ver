/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";
import { useSpring } from "react-spring";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import Modal from "../Modal/index"
import Image from "next/image";
import menuBayc from "../../../public/img/portfolio/portfolio/Bayc/load.png"

const NavbarFullMenu = ({ theme,open,onClose }) => {
  // const [openModal, setOpenModal] = useState(false)


  // const [load, setLoad] = React.useState(true);


  const styles = useSpring({
    delay: 100,
    loop: true,
    to: [
    { opacity: 1 },
    { opacity: 2 },
    ],
    from: { opacity: 0 },
  });
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
              <span className="menu-text word">Menu</span>
            </span>
          </div>
          {/* <div className="submenu mx-2">
            <select className="text">
              <option value="1">ENG</option>
              <option value="2">KOR</option>
              <span className="menu-text word">hi</span>
            </select>
          </div> */}
          <div className="submenu">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Eng
              </span>
              <div className="dropdown-menu">
                <Link href={`/eng`}>
                  <a className="dropdown-item">Eng</a>
                </Link>
                <Link href={`/kor`}>
                  <a className="dropdown-item">Kor</a>
                </Link>
              </div>
            </li>
          </div>
          {/* <div className="sub-menu">
            <button className="modalBtn" onClick={() => setOpenModal(true)}>Modal</button>
            <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
          </div> */}
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
                      <Link href={`/about`}>
                        <a className="link">
                          <span className="nm">01.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        
                        <span className="nm">02.</span>Artist
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/about/artist/maniac`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>MAN1AC
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/about/artist/uranus`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Uranus
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/about/artist/minshik`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Minshik
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        
                        <span className="nm">03.</span>Mascot
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/about/mascot/bayc`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>BAYC
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <div className="o-hidden">
                      <Link href={`/news`}>
                        <a className="link">
                          <span className="nm">03.</span>News
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/`}>
                        <a className="link">
                          <span className="nm">04.</span>Shop
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contact`}>
                        <a className="link">
                          <span className="nm">05.</span>Contact
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
                  <h6>Phone :</h6>
                  <p>+82 10 8288 2120</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    20, World Cup-ro 12-gil, Mapo-gu., Seoul
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">thehowl88@gmail.com</a>
                  </p>
                </div>
                {/* <div className="item">
                  <p>
                    
                  </p>
                </div> */}
                <div className="item">
                  <p>
                    Copyright©  GDACS Holdings Co.,ltd. All rights reversed.
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

export default NavbarFullMenu;
