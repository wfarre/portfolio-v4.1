import React from "react";
import { ReactComponent as ContactImage } from "../../assets/decoration-image/contact.svg";
import ContactForm from "../ContactForm/ContactForm";
import "./assets/Container.scss";

type Props = {};

const ContainerContact = (props: Props) => {
  return (
    <div className="container">
      <div className="decoration">
        <div className="decoration__image">
          <ContactImage className="image" />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContainerContact;
