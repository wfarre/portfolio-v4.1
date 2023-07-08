import React, { useRef } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./assets/Section.scss";

import { motion, useScroll } from "framer-motion";

type Props = {
  additionalClass: string;
  title: string;
  main: any;
  footer?: string;
};

const Section = (props: Props) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 0.5", "1 1"],
  });

  return (
    <section
      className={"section section--" + props.additionalClass}
      // ref={scrollRef}
    >
      {/* {props.additionalClass === "about" && (
        <motion.div
          className="progress-container"
          id="myBar"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
      )} */}
      <header className="section__header">
        <SectionTitle title={props.title} />
      </header>

      <div className="section__main">{props.main}</div>
      <footer className="section__footer"></footer>
    </section>
  );
};

export default Section;
