import React from "react";
import "./index.css";
import telegramm from "../../assets/img/telegramm.png"
import instagramm from "../../assets/img/instagramm.png"
import youtube from "../../assets/img/youtube.png"
import bg from "../../assets/img/bg.jpg"

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-box">
              <h1 className="hero-title">welcome our restourant</h1>
              <p className="hero-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium corrupti id cum, adipisci earum, eius architecto
                sequi nobis quia et suscipit quaerat, fugit facilis iure?
                Cupiditate eveniet impedit qui suscipit?
              </p>
              <div className="hero-mini-box">
                <button className="hero-btn">follow me</button>
                <div className="hero-mini-box-inner">
                  <p className="hero-mini-box-p">open menu</p>
                  <p className="hero-mini-box-p">prise</p>
                </div>
              </div>
              <div className="hero-bottom-box">
                <img
                  src={instagramm}
                  alt="instagramm"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
                <img
                  src={telegramm}
                  alt="github"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
                <img
                  src={youtube}
                  alt="youtube"
                  className="hero-bottom-img"
                  width={29}
                  height={29}
                />
              </div>
            </div>
            <img
              src={bg}
              alt="bg"
              className="hero-img"
              width={800}
              height={632}
            />
          </div>
        </div>
      </section>
    </>
  );
};
