import React, {useState, useEffect} from "react";
// import ReactDOM from 'react-dom'
import Head from "next/head";
import Script from "next/script";
// import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import { useRouter } from "next/router";
import Loading from "../components/LoadingScreenTwo/lodingScrenn";
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import loadVideo from "../../public/video/loadingV.mp4";
import styles from "../components/Loading-Screen/loadV.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ModalVideo from 'react-modal-video'
// import Loading from "../components/Loading-Screen/loading"
import LoadingScreen from "../components/Loading-Screen";
// import Modal from "../components/Modal/index";

import loadingPaceTwo from "../common/loadingPaceTwo"
import LoadingScreenVideo from "../components/Loading-Screen/loadV";
import "../styles/main.scss";
import loadingPace from "../common/loadingPace";


function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  // useEffect(()=>{
  //   alert('{dd}')
  // },[])

  // const handleClose = () => {
  //   setShow(false)
  //   reload();
  // };

  // const [openModal, setOpenModal] = useState(true)
    // const [counter, setValue] = useState(0);
    // const onClick = () => setValue((prev) => prev + 1);
    // console.log("call an API");

    // console.log("I run all the time");
    // const iRunOnlyOnce = () => {
    //   loadingPaceTwo("oneTime");
    // };
    // useEffect(iRunOnlyOnce, []);
  // const loadDataOnlyOnce = () => {
  //   console.log("loadDataOnlyOnce");
  // };

  // useEffect(() => {
  //     loadDataOnlyOnce(<LoadingScreenVideo/>); // this will fire only on first render
  // }, []);
  // React.useEffect(() => {
  //   $(document.onload).ready(function(){
  //     loadingPaceTwo();
  //     if (loadingPaceTwo.done);
  //     loadingPace();
  //   }); 
  // })
  // const [setload, setloading] = useState(false)

  // loader youtube
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== router.pathname ? setLoading(true) : setLoading(false);
  //   };
  //   const handleComplete = (url) => setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);
  // }, [router]);

  return (
    <>

      <Head>
        <title>GRE</title>
        <link rel="icon" href="/img/favicon2.ico" />
      </Head>
      {/* <Cursor /> */}
      {/* <LoadingScreen/> */}
      {/* <button className="modalBtn" onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onClose={()=> setOpenModal(false)}/> */}
        
      {/* <React.Fragment>
        <ModalVideo channel='classNames' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

        <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
      </React.Fragment> */}
      {/* {loading ? <LoadingScreenVideo /> : null} */}
      {/* <LoadingScreenVideo/> */}
      {/* {loading ? <Loading /> : null} */}

      {/* <Loading loading={loading} />  */}
      <div>

      </div>
      <Alert show={show} className={styles.alert} variant="">
        {/* <Alert.Heading>GREAT RESET</Alert.Heading> */}
        {/* <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p> */}
        
        <video 
          className={styles.video}
          // width={100}
          playsInline
          id="LoadVideo"
          autoPlay={true}
          loop={true}
          muted
          src={loadVideo} 
          type="video/mp4"
        >
        </video>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="dark">
            X
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
      {/* {[
        // 'primary',
        // 'secondary',
        // 'success',
        // 'danger',
        // 'warning',
        // 'info',
        // 'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <video 
            // className={styles.video}
            playsInline
            id="LoadVideo"
            autoPlay={true}
            loop={true}
            muted
            src={loadVideo} 
            type="video/mp4"
          >
          </video>
          This is a {variant} alert—check it out!
        </Alert>
      ))} */}
        {/* <Button variant="primary d-block w-100" onClick={handleShow}>
          Open
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}

      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
