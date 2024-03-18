import React from "react";
import "./index.css"
import icon from "../../assets/img/icon.png"
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header-link">
              <img src={icon} alt="" className="header-logo" width={55} height={55} />
            </a>
            <ul className="header-list">
              <li className="header-item">
                <a href="#" className="header-item-link">
                  home
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  about
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  purchuse
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  empty-place
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  foods
                </a>
              </li>
            </ul>
            <div className="header-btn-box">
              <button className="header-btn">register</button>
              <button className="header-btn">login</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
