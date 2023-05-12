import React from "react";
import "./assets/Button.scss";

type Props = { buttonText: string; id: string; setSlide: Function };

const CarouselButton = (props: Props) => {
  const buttonFirstLetter = props.buttonText.slice(0, 1);
  const buttonRest = props.buttonText.slice(1, props.buttonText.length);

  const handleClick = (e: any) => {
    console.log(props.id);
    const id = parseInt(props.id);
    props.setSlide(id);
  };

  return (
    <div className="button-wrapper">
      <button className="btn" id={"button-" + props.id} onClick={handleClick}>
        <span className="btn__firstletter">{buttonFirstLetter}</span>
        {buttonRest}
      </button>
    </div>
  );
};

export default CarouselButton;
