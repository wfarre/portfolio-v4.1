import React from "react";
import image from "../../imagetest.jpg";

type Props = { title: string; description: string; skillsList?: any[] };

const Card = (props: Props) => {
  const firstLetter = props.title.slice(0, 1);
  const titleRest = props.title.slice(1, props.title.length);

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="card__content">
        <div className="title-wrapper">
          <h3 className="card__content__title">
            <span className="card__content__title__firstletter">
              {firstLetter}
            </span>
            {titleRest}
          </h3>
        </div>

        <div className="text-wrapper">
          <p className="card__content__text">
            {props.description}
            <ul>
              {props.skillsList !== undefined &&
                props.skillsList.map((skill) => {
                  return <li>{skill.skillTag}</li>;
                })}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
