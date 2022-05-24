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
              </div>
            </div>
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <div className="author">
                  <div className="author-img">
                    <img src="/img/blog/2-1.jpg" alt="" />
                  </div>
                  <div className="info text-center my-2">
                    <h6>
                      <span>Uranus :</span> Singer
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas pariatur perferendis maiores maxime a omnis reprehenderit cumque deserunt eaque, tempore dolores molestiae! Sequi, reiciendis nobis. Rerum quod debitis est, repellendus suscipit officia libero, accusantium sit tempore repellat aspernatur fugit laboriosam voluptatibus aut minus adipisci quaerat. Itaque deleniti quos dignissimos minima?
                    </p>
                    <div className="social" >
                      <a href="https://m.facebook.com/Uranus.bbb?_rdr" target="_blank" className="mx-2">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/uranusuya/?igshid=1aa14xv6wpy08" target="_blank" className="mx-2">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/c/Uyanga/featured?app=desktop&disable_polymer=true&itct=CBoQ8JMBGAAiEwiS_uGC79DvAhXJkXwKHZYDAsk%3D" target="_blank" className="mx-2">
                        <i className="fab fa-youtube"></i>
                      </a>
                      
                    </div>
                  </div>
                </div>
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
                <span data-filter=".graphic">Creative</span>
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
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Creativity Demand</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
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
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Through The Breaking</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
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
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Create With Creatives</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
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
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
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
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyleUranus;
