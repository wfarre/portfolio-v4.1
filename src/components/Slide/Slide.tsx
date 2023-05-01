import React from "react";
import image from "../../imagetest.jpg";

import "./assets/Slide.scss";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = { id: string; title: string; currentSlide: number };

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
          <img src={image} alt="" />
        </div>
      </div>
      <div className="slide__main">
        <p>
          dsjidjowiojjiojeoijf jcjdjfioe jdsiosjfioew jiosjod asjdiojd djdijiej
          dojoijd fsdjiojioe jdsiosjfioew dsjidjowiojjiojeoijf jcjdjfioe
          jdsiosjfioew jiosjod asjdiojd djdijiej dojoijd fsdjiojioe jdsiosjfioew
          dsjidjowiojjiojeoijf jcjdjfioe jdsiosjfioew jiosjod asjdiojd djdijiej
          dojoijd fsdjiojioe jdsiosjfioew
        </p>
      </div>
      <div className="slide__footer">
        <ul className="links">
          <li className="links__item links__item--github">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </li>
          <li className="links__item links__item--github">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faGlobe} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slide;
