import React from "react";
import feather from "../../../assets/feather.png";
import volleyball from "../../../assets/volleyball.png";
import gloves from "../../../assets/gloves.png";
import { Carousel } from "antd";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="">
      <Carousel className=" " autoplay>
        <div>
          <div className="banner">
            <div className="banner-content">
              <h1 className="tracking-widest banner-heading">
                Leather Cricket Batting Gloves
              </h1>
              <div className="discount-text">50% OFF Today Only!</div>
              <button className="banner-button">Learn More</button>
            </div>
            <div className="w-1/3">
              <img className="w-full" src={feather} alt="Banner" />
            </div>
          </div>
        </div>
        <div>
          <div className="banner">
            <div className="banner-content">
              <h1 className="tracking-widest banner-heading">
                Leather Cricket Batting Gloves
              </h1>
              <div className="discount-text">30% OFF Today Only!</div>
              <button className="banner-button">Learn More</button>
            </div>
            <div className="w-1/4">
              <img className="w-full" src={volleyball} alt="Banner" />
            </div>
          </div>
        </div>
        <div>
          <div className="banner">
            <div className="banner-content">
              <h1 className="tracking-widest banner-heading">
                Leather Cricket Batting Gloves
              </h1>
              <div className="discount-text">40% OFF Today Only!</div>
              <button className="banner-button">Learn More</button>
            </div>
            <div className="w-1/4">
              <img className="w-full" src={gloves} alt="Banner" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
