import React, { ReactComponentElement } from "react";
import image from "../../imagetest.jpg";
import "./assets/Card.scss";

type Props = {
  title: string;
  description: string;
  skillsList?: any[];
  image: any;
};

const Card = (props: Props) => {
  const firstLetter = props.title.slice(0, 1);
  const titleRest = props.title.slice(1, props.title.length);

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__image">
          <img src={props.image} alt="" />
          {/* {props.image} */}
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
          <div className="card__content__text">
            <p>{props.description}</p>
            <ul>
              {props.skillsList !== undefined &&
                props.skillsList.map((skill, key = 0) => {
                  return (
                    <li className="skill" key={"skill" + key}>
                      {skill.skillTag}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
