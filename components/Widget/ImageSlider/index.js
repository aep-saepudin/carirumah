import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"


const defaultImages = [
  "/static/rumah/1.jpg",
  "/static/rumah/2.jpg",
  "/static/rumah/3.jpg",
]

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots          : true,
      infinite      : true,
      speed         : 500,
      slidesToShow  : 1,
      slidesToScroll: 1
    }

    return (
      <div className="ImageSlider">
        <Slider {...settings} >
          {defaultImages.map(src => <div key={src}><img src={src} className="image-product"/></div>) }
        </Slider>
      </div>
    )
  }
}