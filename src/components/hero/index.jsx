import React from "react";
import "./index.css"
export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-box">
              <h1 className="hero-title">marhamat</h1>
              <p className="hero-text">
               
              </p>
              <div className="hero-mini-box">
                <button className="hero-btn">Try Now</button>
                <div className="hero-mini-box-inner">
                  <p className="hero-mini-box-p">Open a workspace.</p>
                  <p className="hero-mini-box-p">Open a workspace.</p>
                </div>
              </div>
              <div className="hero-bottom-box">
                <img
                  src=""
                  alt="gitlab"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
                <img
                  src=""
                  alt="github"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
                <img
                  src=""
                  alt="frame"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
              </div>
            </div>
            <img
              src=""
              alt="bg"
              className="hero-img"
              width={630}
              height={632}
            />
          </div>
        </div>
      </section>
    </>
  );
};
