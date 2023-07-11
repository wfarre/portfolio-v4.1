import React from "react";
import "./assets/Button.scss";
import { log } from "console";

type Props = { buttonText: string; onClick?: Function };

const Button = (props: Props) => {
  const buttonFirstLetter = props.buttonText.slice(0, 1);
  const buttonRest = props.buttonText.slice(1, props.buttonText.length);

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
      console.log("cacacacacacacaacc");
    }
  };

  return (
    <div className="button-wrapper">
      <button className="btn" onClick={onClick}>
        <span className="btn__firstletter">{buttonFirstLetter}</span>
        {buttonRest}
      </button>
    </div>
  );
};

export default Button;
