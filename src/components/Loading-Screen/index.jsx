import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";

// import loadingV from "../../../public/video/loadingV.mp4";
// import Image from "next/image";
// import load from "../../../public/img/portfolio/portfolio/Bayc/load.png";


const LoadingScreen = () => {
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
        {/* <div className="videoload"> */}
          {/* <video src={require('../../../public/videoloadingV.mp4')} /> */}
          {/* <div className="videoLoad">

          </div> */}
          {/* <div 
            className="imgLoad"
          >
            <Image
              src={load}
              alt="load image"
              width={50}
              height={50}
            >
            </Image>
          </div> */}
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>

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

export default LoadingScreen;
