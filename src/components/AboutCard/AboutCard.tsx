import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

type Props = { index: number; content: string; question: string };

const AboutCard = (props: Props) => {
  return (
    <div
      className={props.index % 2 === 0 ? "card card--left" : "card card--right"}
    >
      <div className="text-wrapper">
        <p className="card__content__text">
          <span className="question">{props.question}</span>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
