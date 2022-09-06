/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from 'next/image'
import UranusOne from "../../../public/img/portfolio/portfolio/Uranus/2.png"
import UranusTwo from "../../../public/img/portfolio/portfolio/Uranus/2-1.png"
import UranusThree from "../../../public/img/portfolio/portfolio/Uranus/2-2.png"
import UranusFour from "../../../public/img/portfolio/portfolio/Uranus/2-3.png"
import UranusFive from "../../../public/img/portfolio/portfolio/Uranus/2-4.png"
import UranusSix from "../../../public/img/portfolio/portfolio/Uranus/2-5.png"
import UranusSeven from "../../../public/img/portfolio/portfolio/Uranus/2-7.png"
import UranusEight from "../../../public/img/portfolio/portfolio/Uranus/2-8.png"
import UranusNine from "../../../public/img/portfolio/portfolio/Uranus/2-9.png"
import UranusTen from "../../../public/img/portfolio/portfolio/Uranus/2-10.png"

const WorksStyleUranusKor = ({ grid, hideFilter, filterPosition }) => {
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
                  아티스트
                </h3>
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  오라노스(오양가)
                </h6>
                <a href="https://www.facebook.com/Uranus.bbb" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f mx-2"></i>
                </a>
                
                <a href="https://www.instagram.com/uranusuya/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram mx-2"></i>
                </a>
                <a href="https://www.youtube.com/c/Uyanga/featured?app=desktop&disable_polymer=true&itct=CBoQ8JMBGAAiEwiS_uGC79DvAhXJkXwKHZYDAsk%3D" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube mx-2"></i>
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusOne}
                      alt="picture of uranus one"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusTwo}
                      alt="picture of uranus two"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusThree}
                      alt="picture of uranus three"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusFour}
                      alt="picture of uranus Four"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusFive}
                      alt="picture of uranus Five"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusSix}
                      alt="picture of uranus Six"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusSeven}
                      alt="picture of uranus seven"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusEight}
                      alt="picture of uranus Eight"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusNine}
                      alt="picture of uranus Nine"
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
                <Link href={`/kor/about/artist/uranus`}>
                  <a className="imago wow">
                    <Image
                      src={UranusTen}
                      alt="picture of uranus Ten"
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

export default WorksStyleUranusKor;
