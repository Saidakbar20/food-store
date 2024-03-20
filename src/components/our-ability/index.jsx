import React from "react";
import "./index.css";
import car from "../../assets/img/deliver.png";
import group from "../../assets/img/return.png";
import fastdeliver from "../../assets/img/fastdeliver.png";

export const Ability = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services-inner">
            <div className="cards">
              <div className="card">
                <img
                  src={car}
                  alt=""
                  className="services-card-1"
                  width={50}
                  height={50}
                />
                <h3 className="services-card-1-title">Tekin yetkazib bermoq</h3>
                <div className="services-card-1-text-box">
                  <p className="services-card-1-text">
                    Oxirgi imkoniyat! Barcha buyurtmalar uchun bepul yetkazib
                    berish bugun tugaydi.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src={group}
                  alt=""
                  className="services-card-2"
                  width={50}
                  height={50}
                />
                <h3 className="services-card-1-title">Tez qadoqlash</h3>
                <div className="services-card-1-text-box">
                  <p className="services-card-1-text">
                    Oxirgi imkoniyat! Barcha buyurtmalar uchun bepul yetkazib
                    berish bugun tugaydi.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src={fastdeliver}
                  alt=""
                  className="services-card-3"
                  width={50}
                  height={50}
                />
                <h3 className="services-card-1-title">100% pulni qaytarish</h3>
                <div className="services-card-1-text-box">
                  <p className="services-card-1-text">
                    Oxirgi imkoniyat! Barcha buyurtmalar uchun bepul yetkazib
                    berish bugun tugaydi.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  alt=""
                  className="services-card-4"
                  width={50}
                  height={50}
                />
                <h3 className="services-card-1-title">Tez yetkazib berish</h3>
                <div className="services-card-1-text-box">
                  <p className="services-card-1-text">
                    Oxirgi imkoniyat! Barcha buyurtmalar uchun bepul yetkazib
                    berish bugun tugaydi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
