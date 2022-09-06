/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from 'next/image'
import ManiacOne from "../../../public/img/portfolio/portfolio/Maniac/1.png"
import ManiacTwo from "../../../public/img/portfolio/portfolio/Maniac/1-2.png"
import ManiacThree from "../../../public/img/portfolio/portfolio/Maniac/1-3.png"
import ManiacFour from "../../../public/img/portfolio/portfolio/Maniac/1-4.png"
import ManiacFive from "../../../public/img/portfolio/portfolio/Maniac/1-5.png"


const WorksStyle2Kor = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h3 className="wow color-font">
                  CEO & 아티스트
                </h3>
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  MAN1AC
                </h6>
                <a href="https://www.facebook.com/maniac1shot" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f mx-2"></i>
                </a>
                
                <a href="https://www.instagram.com/maniac1shot/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram mx-2"></i>
                </a>
                <a href="https://www.youtube.com/user/maniac1shot" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube mx-2"></i>
                </a>
                <a href="https://twitter.com/maniac1shot" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter mx-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  모두보기
                </span>
                <span data-filter=".brand">포토</span>
                <span data-filter=".web">앨범</span>
                {/* <span data-filter=".graphic">Creative</span> */}
              </div>
            </div>
          )}
          
          <div className="gallery full-width">

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/about/artist/maniac`}>
                  <a className="imago wow">
                    <Image
                      src={ManiacOne}
                      alt="picture of maniac one"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/about/artist/maniac`}>
                  <a className="imago wow">
                    <Image
                      src={ManiacTwo}
                      alt="picture of maniac two"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/about/artist/maniac`}>
                  <a className="imago wow">
                    <Image
                      src={ManiacThree}
                      alt="picture of maniac Three"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/about/artist/maniac`}>
                  <a className="imago wow">
                    <Image
                      src={ManiacFour}
                      alt="picture of maniac four"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/about/artist/maniac`}>
                  <a className="imago wow">
                    <Image
                      src={ManiacFive}
                      alt="picture of maniac five"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2Kor;
