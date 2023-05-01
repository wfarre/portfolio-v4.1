import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Card from "./components/Card/Card";

// require("dotenv").config();

import Slide from "./components/Slide/Slide";
import CarouselButton from "./components/CarouselButton/CarouselButton";

import emailjs from "@emailjs/browser";

import { ReactComponent as ProgrammingPic } from "./assets/decoration-image/programming.svg";
import { ReactComponent as ResponsivePic } from "./assets/decoration-image/responsive.svg";
import { ReactComponent as CodeTestingPic } from "./assets/decoration-image/coding-thinking.svg";
import Carousel from "./components/Carousel/Carousel";
import Section from "./components/Section/Section";

import { ReactComponent as ContactImage } from "./assets/decoration-image/contact.svg";
import Button from "./components/Button/Button";

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
    image: <ProgrammingPic className="svg" />,
  },
  {
    title: "Responsive",
    description:
      "I can code responsive websites. So, your website will be adapted to the different screen sizes.",
    image: <ResponsivePic className="svg" />,
  },

  {
    title: "code testing",
    description:
      "The code HTML/CSS is always verified using W3C validators. I can also do unitary test using Jest.",
    image: <CodeTestingPic className="svg" />,
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

  const form: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    console.log("hello");

    if (
      serviceId !== undefined &&
      templateId !== undefined &&
      publicKey !== undefined
    ) {
      console.log("yes!!!");

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  // useEffect(() =>)

  return (
    <div className="App">
      <Navbar />
      <Header />

      <main>
        <Section
          additionalClass="skills"
          title="Skills"
          main={
            <div className="section__main">
              <div className="container">
                {skills.map((skill) => {
                  return (
                    <Card
                      title={skill.title}
                      description={skill.description}
                      skillsList={skill.skills}
                      image={skill.image}
                    />
                  );
                })}
              </div>
            </div>
          }
        />

        <Section
          title="About me"
          additionalClass="about"
          main={
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
          }
        />

        {/* <section className="section section--about">
          <header className="section__header">
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
        </section> */}

        <Section
          title="Porfolio"
          additionalClass="portfolio"
          main={<Carousel />}
        />

        <section className="section section--contact">
          <header className="section__header">
            <SectionTitle title={"Contact me"} />
          </header>
          <div className="section__main">
            <div className="container">
              <div className="decoration">
                <div className="decoration__image">
                  <ContactImage className="image" />
                </div>
              </div>
              <form
                ref={form}
                action="POST"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="contact-form__item">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="contact-form__item">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                  />
                </div>
                <div className="contact-form__item">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    className="input"
                    name="message"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button buttonText="Send" />
              </form>
            </div>
          </div>
          <footer className="section__footer"></footer>
        </section>

        {/* <Button buttonText="Send" /> */}
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
