import React from "react";
import "./assets/Button.scss";

type Props = { buttonText: string };

const Button = (props: Props) => {
  const buttonFirstLetter = props.buttonText.slice(0, 1);
  const buttonRest = props.buttonText.slice(1, props.buttonText.length);

  return (
    <div className="button-wrapper">
      <button className="btn">
        <span className="btn__firstletter">{buttonFirstLetter}</span>
        {buttonRest}
      </button>
    </div>
  );
};

export default Button;
