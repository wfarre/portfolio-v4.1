import React, { useState } from "react";

import CarouselButton from "../CarouselButton/CarouselButton";
import Slide from "../Slide/Slide";

type Props = {};

const Carousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const setSlide = (id: number) => {
    console.log(id);
    setCurrentSlide(id);
  };

  return (
    <div className="container">
      <div className="viewport">
        <Slide id="slide-1" title="Hello" currentSlide={currentSlide} />
        <Slide id="slide-2" title="Rouge" currentSlide={currentSlide} />
        <Slide id="slide-3" title="Bleu" currentSlide={currentSlide} />
      </div>

      <div className="select">
        <ul className="slide-list">
          <li className="slide-list__item">
            <CarouselButton buttonText="Kasa" id="1" setSlide={setSlide} />
          </li>
          <li className="slide-list__item">
            <CarouselButton id="2" buttonText="OhMyFood!" setSlide={setSlide} />
          </li>

          <li className="slide-list__item">
            <CarouselButton
              id="3"
              buttonText="Hello Bank"
              setSlide={setSlide}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
