import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
// import { LoadingScreenTwo } from '../components/LoadingScreenTwo';
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Loader from "../components/Loader/Loader";
// import NProgress from "nprogress";
// import Router from "next/router";
import "../styles/main.scss";

// export async function getServerSideProps() {
//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });

//   return {
//     props: {}, // Will be passed to the page component as props
//   }
// }
// function Loading(){
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setTimeout(() => {setLoading(false)}, 5000);

//     router.events.on('routerChangeStart', handleStart)
//     router.events.on('routerChangeComplete', handleComplete)
//     router.events.on('routerChangeError', handleComplete)
//     // router.events.on
//     // routerChangeStart
//     // routerChangeComplete
//     // routerChangeError
//     return() => {
//       router.events.off('routerChangeStart', handleStart)
//       router.events.off('routerChangeComplete', handleComplete)
//       router.events.off('routerChangeError', handleComplete)
//     }
//   })
//   return loading && (
//     <div className="spinner-wrapper">
//       <div className="spinner"/>
//     </div>
//   )
// }

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false)
  // Router.events.on("routerChangeStart", (url) => {
  //   console.log("Router is changing...");
  //   NProgress.start();
  //   setLoading(true);
  // });

  // Router.events.on("routerChangeComplete", (url) => {
  //   console.log("Router is changing is complete...");
  //   NProgress.done();
  //   setLoading(false);
  // });

  return (
    <>
      {/* {loading && <Loader />} */}
      {/* <Loading/> */}
      <Head>
        <title>GRE</title>
        <link rel="icon" href="/img/favicon2.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Cursor />
      <LoadingScreen />
      {/* <LoadingScreenTwo /> */}
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
