import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import loadVideo from "../../../public/video/loadingV.mp4";
// import loadingV from "../../../public/video/loadingV.mp4";
// import Image from "next/image";
// import load from "../../../public/img/portfolio/portfolio/Bayc/load.png";

const LoadingScreenVideo = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div className="loading">
          <video
            autoPlay
            loop
            muted
          >
            <source  src={loadVideo} type="video/mp4"/>
          </video>
        </div>
        <div id="preloader"></div>
      </div>
      {appData.showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreenVideo;
