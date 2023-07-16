import React from "react";
import { ReactComponent as ContactImage } from "../../assets/decoration-image/contact.svg";
import ContactForm from "../ContactForm/ContactForm";
import "./assets/Container.scss";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPhone } from "@fortawesome/free-regular-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";

type Props = {};

const ContainerContact = (props: Props) => {
  return (
    <div className="container">
      <div className="decoration">
        <div className="decoration__image">
          <ContactImage className="image" />
        </div>
      </div>
      {/* <ContactForm /> */}
      <div className="contacts">
        <div className="contacts__address">
          <p className="address">Sanmin district</p>
          <p className="city">807 Kaohsiung, Taiwan</p>
        </div>
        <div className="contacts__phone">
          {/* <FontAwesomeIcon icon={faPhone} />  */}
          <p>+886 (0)933-730-512</p>
        </div>
        <div className="contats__email">
          <p>william.farre@gmail.com</p>
        </div>
        <div className="sns">
          <ul className="sns__list">
            <li className="sns__list__item">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </a>
            </li>
            <li className="sns__list__item">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>
            </li>
            <li className="sns__list__item">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </li>
            <li className="sns__list__item">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContainerContact;
