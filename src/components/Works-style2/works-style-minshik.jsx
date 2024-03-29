/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Image from 'next/image'
import MinshikOne from "../../../public/img/portfolio/portfolio/Minshik/3.png"
import MinshikTwo from "../../../public/img/portfolio/portfolio/Minshik/3-1.png"
import MinshikThree from "../../../public/img/portfolio/portfolio/Minshik/3-2.png"
import MinshikFour from "../../../public/img/portfolio/portfolio/Minshik/3-3.png"
import MinshikFive from "../../../public/img/portfolio/portfolio/Minshik/3-4.png"
import MinshikSix from "../../../public/img/portfolio/portfolio/Minshik/3-5.png"
import MinshikSeven from "../../../public/img/portfolio/portfolio/Minshik/3-6.png"
import MinshikEight from "../../../public/img/portfolio/portfolio/Minshik/3-7.png"
import MinshikNine from "../../../public/img/portfolio/portfolio/Minshik/3-8.png"

const WorksStyleMinshik = ({ grid, hideFilter, filterPosition }) => {
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
                  Artist
                </h3>
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Minshik
                </h6>
                
                <a href="https://www.instagram.com/itsminshik/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram mx-2"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC1AdAj7-P6p8kSHN7DoZ0fQ" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube mx-2"></i>
                </a>
                <a href="https://twitter.com/itsminshik" target="_blank" rel="noopener noreferrer">
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
                  All
                </span>
                <span data-filter=".brand">Photo</span>
                <span data-filter=".web">Album</span>
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikOne}
                      alt="picture of minshik one"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikTwo}
                      alt="picture of minshik two"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikThree}
                      alt="picture of minshik three"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikFour}
                      alt="picture of minshik Four"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikFive}
                      alt="picture of minshik Five"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikSix}
                      alt="picture of minshik six"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikSeven}
                      alt="picture of minshik seven"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikEight}
                      alt="picture of minshik eight"
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
                <Link href={`/about/artist/minshik`}>
                  <a className="imago wow">
                    <Image
                      src={MinshikNine}
                      alt="picture of minshik nine"
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

export default WorksStyleMinshik;
