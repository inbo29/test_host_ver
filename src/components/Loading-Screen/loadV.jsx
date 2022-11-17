import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace";
import loadingPaceTwo from "../../common/loadingPaceTwo";
import appData from "../../data/app.json";
import loadVideo from "../../../public/video/loadingV.mp4";
import styles from "./loadV.module.css"

const LoadingScreenVideo = () => {

  // let num = 0;
  // const UseEffect = () => {
  //   const [text, setText] = useState("");
  //   const [message, setMessage] = useState("");
  //   const onChange = (e) => {
  //     setText(e.target.value);
  //   };
  //   const onChange2 = (e) => {
  //     setMessage(e.target.value);
  //   };

  //   useEffect(() => {
  //     console.log("렌더링이 완료될 때마다 실행합니다." + num++);
  //     return () => {
  //       console.log("cleanup");
  //     };
  //   });
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPaceTwo();
      
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  }, []);
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