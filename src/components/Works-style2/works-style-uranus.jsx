/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyleUranus = ({ grid, hideFilter, filterPosition }) => {
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
                  Uranus
                </h6>
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
                <a className="imago wow" href="https://m.facebook.com/Uranus.bbb/photos/pb.100044153303449.-2207520000../2600947993459876/?type=3&source=42" target="_blank"> 
                  <img src="/img/portfolio/portfolio/2/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>Creativity Demand</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow" href="https://music.apple.com/us/album/%EB%AF%B8%EB%9E%98%EA%B0%80-single/1520967534" target="_blank">
                  <img src="/img/portfolio/portfolio/2/album1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>Through The Breaking</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow" href="https://music.apple.com/us/album/yummy-feat-mekh-zakhq-single/1579641586" target="_blank">
                  <img src="/img/portfolio/portfolio/2/album2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>Create With Creatives</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow" href="https://music.apple.com/us/album/let-me-be-single/1520966850" target="_blank">
                  <img src="/img/portfolio/portfolio/2/album3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a className="imago wow" href="https://music.apple.com/us/album/let-me-be-single/1520966850" target="_blank">
                  <img src="/img/portfolio/portfolio/2/album4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
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
                <a className="imago wow" href="https://m.facebook.com/Uranus.bbb/photos/pb.100044153303449.-2207520000../2235742116647134/?type=3&source=42" target="_blank">
                  {/* <img src="/img/portfolio/portfolio/2/3.jpg" alt="image" /> */}
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              {/* <div className="cont">
                <h6>Blast From The Past</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyleUranus;
