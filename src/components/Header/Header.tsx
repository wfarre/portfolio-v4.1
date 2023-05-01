import React, { useEffect, useState } from "react";
import "./assets/Header.scss";
import Button from "../Button/Button";
import { generateTitle } from "../../utils/generateTItle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

const Header = (props: Props) => {
  const [myTitle, setMyTitle] = useState<any[]>([]);

  useEffect(() => {
    setMyTitle(generateTitle("William Farré"));
  }, []);
  return (
    <header className="header">
      <p>
        <span className="focus">Hello World</span>, my name is
      </p>
      <h1 className="header__title">
        {myTitle.map((letter) => {
          return (
            <span key={letter.key} className={letter.className}>
              {letter.letter}
            </span>
          );
        })}
      </h1>

      <div className="header__intro">
        <p>
          I am a front-end developer specialized in{" "}
          <FontAwesomeIcon icon={faReact} className="icon" />
          <em className="skill">React</em>. Of course, I can use vanilla{" "}
          <FontAwesomeIcon icon={faJs} className="icon" />
          <em className="skill">Javascript</em>,{" "}
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <em className="skill">HTML</em> and{" "}
          <FontAwesomeIcon icon={faCss3} className="icon" />
          <em className="skill">CSS</em>.{" "}
        </p>
      </div>

      <div className="header__footer">
        <div className="container container--buttons">
          <Button buttonText="Contact me" />
          <Button buttonText="Download CV" />
        </div>
      </div>
    </header>
  );
};

export default Header;
