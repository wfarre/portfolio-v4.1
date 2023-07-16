import React, { useEffect, useState } from "react";
import image from "../../imagetest.jpg";

import "./assets/Slide.scss";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import kasaImg from "../../assets/portfolio-images/kasa.png";
// import ohMyFoodImg from "../../assets/portfolio-images/ohmyfood.png";
// import bookmarkImg from "../../assets/portfolio-images/bookmark.png";
// import multistepImg from "../../assets/portfolio-images/multistep.png";
// import fisheyeImg from "../../assets/portfolio-images/fisheye.png";

type Props = {
  id: string;
  title: string;
  currentSlide: number;
  image: any;
  description: string;
  url: string;
  github: string;
  goal: string;
  languages: string[];
};

const Slide = (props: Props) => {
  console.log(props);

  return (
    <div
      className={
        "slide-" + props.currentSlide === props.id ? "slide" : "slide hidden"
      }
      id={props.id}
    >
      <div className="slide__header">
        <div className="title-wrapper">
          <h3 className="slide__header__title">{props.title}</h3>
        </div>
        <div className="slide__header__image">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="slide__main">
        <div className="slide__main__paragraph">
          <h4 className="slide__main__paragraph__title">Goal</h4>
          <p className="slide__main__paragraph__content">{props.goal}</p>
        </div>
        <div className="slide__main__paragraph">
          <h4 className="slide__main__paragraph__title">Description</h4>
          <p className="slide__main__paragraph__content">{props.description}</p>
        </div>
      </div>
      <div className="slide__footer">
        <div className="languages">
          {props.languages.map((language, key = 0) => {
            key++;
            return (
              <span key={language + key} className="language">
                {language}
              </span>
            );
          })}
        </div>
        <div className="external-links">
          <h4 className="external-links__title">External links :</h4>
          <ul className="links">
            <li className="links__item links__item--github">
              <a href={props.github}>
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </li>
            <li className="links__item links__item--github">
              <a href={props.url}>
                <FontAwesomeIcon className="icon" icon={faGlobe} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide;
