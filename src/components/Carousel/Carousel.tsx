import React, { useEffect, useState } from "react";

import CarouselButton from "./CarouselButton/CarouselButton";
import Slide from "./Slide/Slide";
import useFetch from "../../utils/useFetch";
import { PorfolioFactory } from "../../factories/PorfolioFactory";

type Props = {};

const Carousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides, setSlides] = useState([]);

  const setSlide = (id: number) => {
    console.log(id);
    setCurrentSlide(id);
  };

  const { data, isLoaded, error } = useFetch(
    "../../data/portfolio.json",
    PorfolioFactory,
    "json"
  );

  useEffect(() => {
    data && setSlides(data);
  }, [data]);

  return (
    <div className="container">
      <div className="viewport">
        {isLoaded === true &&
          slides?.map((slide: any, key = 0) => {
            key++;
            return (
              <Slide
                key={"slide" + key}
                id={"slide-" + key}
                title={slide.title}
                currentSlide={currentSlide}
                image={slide.image}
                description={slide.description}
                url={slide.url}
                github={slide.github}
              />
            );
          })}
      </div>

      <div className="select">
        <ul className="slide-list">
          {isLoaded === true &&
            slides?.map((slide: any, key = 0) => {
              key++;
              return (
                <CarouselButton
                  key={"slidentn" + key}
                  buttonText={slide.title}
                  id={key.toString()}
                  setSlide={setSlide}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
