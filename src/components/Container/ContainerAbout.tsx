// import React, { useEffect, useState } from "react";
// import useFetch from "../../utils/useFetch";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll } from "framer-motion";

import "./assets/Container.scss";
import { useRef } from "react";

type Props = {};

const aboutContent: string[] = [
  "I am a front-end web developer specializing in React and currently, I am living in Kaohsiung, Taiwan. I can speak French, English and Japanese. I use mainly HTML, CSS, Javascript, React and Sass but I am also familiar with Redux and Jest for testing. ",
  "Before becoming a web developer, I worked in the service industry for 10 years, including 3 years in Japan where I worked in the travel/hospitality industry. ",
  "Why did I choose web development? I have always been interested in programming. When I was working in the travel industry, I had to use excel/ google sheets, and I really enjoyed making formula to do my work more efficiently. In 2020, I bought course on Udemy about Web development, I loved it immediately. ",
  "I finished the course, then I practiced HTML, CSS, Javascript, React and Sass for 6 months. Then, I decided to deepen my knowledge in front-end web development and to be more job ready, I enrolled the “Front-end web developer - Javascript React”. There, I deepen my knowledge in HTML, CSS, Javascript, and React. I also learned unitary tests using Jest and store management using Redux.",
];

const ContainerAbout = (props: Props) => {
  // gsap.registerPlugin(ScrollTrigger);
  // window.scrollTo(0, 0);

  // gsap.from("#main", {
  //   ScrollTrigger: "#main",
  //   rotation: 15,
  //   y: 15,
  //   duration: 0.5,
  // });

  // const cards = document.querySelectorAll(".card");

  // cards.forEach((card) => {
  //   gsap.to(".card", {
  //     scrollTrigger: {
  //       scrub: true,
  //     },
  //     opacity: 0,
  //   });
  // });

  //   const [aboutContent, setAboutContent] = useState[];
  //   const { data, isLoaded, error } = useFetch("../../data/about.json");

  //   useEffect(() => {
  //     data && setAboutContent(data);
  //   });

  //

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 0.5", "1 1"],
  });

  return (
    <div>
      <div
        className="container"
        //  onWheel={() => setScrollingProgress()}
        id="main"
        ref={scrollRef}
      >
        {/* <div className="progress-container"> */}

        {/* </div> */}
        <motion.div
          // className="progress-bar"
          className="progress-container"
          id="myBar"
          style={{ scaleY: scrollYProgress }}
          // initial={{ scaleY: 0 }}
          // whileInView={{ scaleY: 1 }}
          // viewport={{ root: scrollRef }}
        ></motion.div>
        {aboutContent.map((content: string, index: number) => {
          return (
            <div
              key={content + index}
              className={
                index % 2 === 0 ? "card card--left" : "card card--right"
              }
            >
              <div className="text-wrapper">
                <p className="card__content__text">{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContainerAbout;
