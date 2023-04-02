import React, { useEffect, useState } from "react";
import { generateTitle } from "./utils/generateTItle";
import "./App.css";
import Button from "./components/Button/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Card from "./components/Card/Card";
import { log } from "console";

const skills = [
  {
    title: "stack",
    description: "I am specialized in front-end development.  My stack is :",
    skills: [
      {
        skillTag: "HTML",
      },
      {
        skillTag: "CSS",
      },
      {
        skillTag: "Javascript",
      },
      {
        skillTag: "Sass",
      },
      {
        skillTag: "React",
      },
      {
        skillTag: "Redux",
      },
    ],
  },
  {
    title: "Responsive",
    description:
      "I can code responsive websites. So, your website will be adapted to the different screen sizes.",
  },

  {
    title: "code testing",
    description:
      "The code HTML/CSS is always verified using W3C validators. I can also do unitary test using Jest.",
  },
];

const aboutContent: string[] = [
  "I am a front-end web developer specializing in React and currently, I am living in Kaohsiung, Taiwan. I can speak French, English and Japanese. I use mainly HTML, CSS, Javascript, React and Sass but I am also familiar with Redux and Jest for testing. ",
  "Before becoming a web developer, I worked in the service industry for 10 years, including 3 years in Japan where I worked in the travel/hospitality industry. ",
  "Why did I choose web development? I have always been interested in programming. When I was working in the travel industry, I had to use excel/ google sheets, and I really enjoyed making formula to do my work more efficiently. In 2020, I bought course on Udemy about Web development, I loved it immediately. ",
  "I finished the course, then I practiced HTML, CSS, Javascript, React and Sass for 6 months. Then, I decided to deepen my knowledge in front-end web development and to be more job ready, I enrolled the “Front-end web developer - Javascript React”. There, I deepen my knowledge in HTML, CSS, Javascript, and React. I also learned unitary tests using Jest and store management using Redux.",
];

function App() {
  const [height, setHeight] = useState(0);
  // useEffect;

  const setScrollingProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let doc = document.body.scrollHeight;
    let main = (document.getElementById("main") as HTMLBodyElement).offsetTop;
    let win = window.innerHeight;

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // let height = doc - win;
    let scrolled = ((winScroll - main) / height) * 260;
    (document.getElementById("myBar") as HTMLBodyElement).style.height =
      scrolled + "%";
    // console.log(height);
    console.log(winScroll);
    console.log(scrolled);
    console.log(main);
  };

  // useEffect(() =>)

  return (
    <div className="App">
      <Navbar />
      <Header />

      <main>
        <section className="section">
          <header className="section__header">
            <SectionTitle title={"Skills"} />
          </header>
          <div className="section__main">
            <div className="container">
              {/* <Card />
              <Card />
              <Card /> */}

              {skills.map((skill) => {
                return (
                  <Card
                    title={skill.title}
                    description={skill.description}
                    skillsList={skill.skills}
                  />
                );
              })}
            </div>
          </div>
          <footer className="section__footer"></footer>
        </section>

        <section className="section section--about">
          <header className="section__header">
            {/* <h2 className="section__header__title">About me</h2> */}
            <SectionTitle title={"About Me"} />
          </header>
          <div
            className="section__main"
            onWheel={() => setScrollingProgress()}
            id="main"
          >
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>

            <div className="container">
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
          <footer className="section__footer"></footer>
        </section>

        <section className="section">
          <header className="section__header">
            {/* <h2 className="section__header__title">Portfolio</h2> */}
            <SectionTitle title={"Portfolio"} />
          </header>
          <div className="section__main"></div>
          <footer className="section__footer"></footer>
        </section>

        <section className="section">
          <header className="section__header">
            {/* <h2 className="section__header__title">Contact me</h2> */}
            <SectionTitle title={"Contact me"} />
          </header>
          <div className="section__main"></div>
          <footer className="section__footer"></footer>
        </section>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
