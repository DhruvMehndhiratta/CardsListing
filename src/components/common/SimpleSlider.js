import React from 'react';
import Slider from "react-slick";
import ImageRenderer from './ImageRenderer';

const SimpleSlider = ({ data = [], goto }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8
  };
  return (
    <Slider {...settings}>
      {data && data.length ? data.map(({ attributes: { title, price, links }, id }, key) => {
        return <div key={id} className="slider-card" onClick={() => goto(id)}>
          <div>
            {ImageRenderer(key + 1)}
            <div className="slider-card-info">
              <p>{title.length > 20 ? title.substr(0, 35) : title}</p>
              <h6>{price}</h6>
            </div>
          </div>
        </div>
      }) : null}
    </Slider>
  );
}

export default SimpleSlider;