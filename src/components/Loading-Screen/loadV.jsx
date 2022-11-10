import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import appData from "../../data/app.json";
import loadVideo from "../../../public/video/loadingV.mp4";
import styles from "./loadV.module.css"

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
            className={styles.video}
            playsInline
            id="LoadVideo"
            autoPlay={true}
            loop={true}
            muted
            src={loadVideo} 
            type="video/mp4"
          >
            {/* <source   /> */}
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
