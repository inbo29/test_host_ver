/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ArtPagesHeaderUranus = () => {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1 className="color-font fw-700">
                Artist
              </h1>
            </div>
          </div>
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
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default ArtPagesHeaderUranus;