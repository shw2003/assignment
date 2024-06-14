import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import bannerImage from "../assets/banner.jpg";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Logo container">
          <img
            className="logo"
            src="https://imetglobal.com/wp-content/uploads/2022/01/IMET-Logo-300-150-01-2.png"
            alt="food Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <p>Home </p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Courses</p>
            </li>
            <li>
              <p>Gurupool</p>
            </li>
            <li>
              <p>Gallery</p>
            </li>
            <li>
              <p>In News & Media</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>#NotToMiss</p>
            </li>
            <li>
              <p>Contact US</p>
            </li>
          </ul>
        </div>
        <div className="Logo container">
          <img
            className="logo"
            src="https://imetglobal.com/wp-content/uploads/2022/01/261_1455Fig.-Black.png"
            alt="food Logo"
          />
        </div>
      </div>
      <div>
        <img src={bannerImage} alt="food Logo" />
      </div>
    </>
  );
};

export default Header;
