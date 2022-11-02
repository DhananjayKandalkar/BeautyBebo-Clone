import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const sliderAttributes = {
  infiniteLoop: true,
  autoPlay: true,
  showArrows: false,
  stopOnHover: false,
  transitionTime: 6,
  showThumbs: false,
  interval: 4000,
};

const ImageCarousel = ({slideShow}) => {
  return (
    <Carousel {...sliderAttributes}>
      {slideShow?.map((elem, i) => {
        return (
          <div key={elem.id}  style={{cursor: "pointer"}}>
            <img src={elem.avatar} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;