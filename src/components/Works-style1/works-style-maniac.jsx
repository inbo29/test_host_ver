/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";

const WorksStyleManiac = () => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Maniac"
                    data-tooltip-sub="Real HipHop"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-2.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-3.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-4.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-5.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-6.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link href={`/project-details2/project-details2-dark`}>
                <a>
                  <div
                    className="img"
                    data-tooltip-tit="Work image"
                    data-tooltip-sub="Design"
                  >
                    <img src="/img/portfolio/portfolio/maniac/1-7.png" alt="" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyleManiac;
