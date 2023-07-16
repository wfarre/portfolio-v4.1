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
};

const Slide = (props: Props) => {
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
        <p>
          {props.description}
          dsjidjowiojjiojeoijf jcjdjfioe jdsiosjfioew jiosjod asjdiojd djdijiej
          dojoijd fsdjiojioe jdsiosjfioew dsjidjowiojjiojeoijf jcjdjfioe
          jdsiosjfioew jiosjod asjdiojd djdijiej dojoijd fsdjiojioe jdsiosjfioew
          dsjidjowiojjiojeoijf jcjdjfioe jdsiosjfioew jiosjod asjdiojd djdijiej
          dojoijd fsdjiojioe jdsiosjfioew
          {props.url}
        </p>
      </div>
      <div className="slide__footer">
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
  );
};

export default Slide;
