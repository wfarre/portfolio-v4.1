import React, { useState } from "react";
import "./assets/styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Section from "./components/Section/Section";

import ContainerAbout from "./components/Container/ContainerAbout";
import ContainerSkills from "./components/Container/ContainerSkills";
import ContainerContact from "./components/Container/ContainerContact";
import ContactForm from "./components/ContactForm/ContactForm";
import { ClassificationType } from "typescript";

function App() {
  // const [height, setHeight] = useState(0);
  // const [year, setYear] = useState<any>();

  const date = new Date();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleContactMe = () => {
    setModalIsOpen(!modalIsOpen);
  };

  // const setScrollingProgress = () => {
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   let doc = document.body.scrollHeight;
  //   let main = (document.getElementById("main") as HTMLBodyElement).offsetTop;
  //   let win = window.innerHeight;

  //   let height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   let scrolled = ((winScroll - main) / height) * 260;
  //   (document.getElementById("myBar") as HTMLBodyElement).style.height =
  //     scrolled + "%";
  // };

  // const [skills, setSkills] = useState<skillType[]>([]);

  // const { data, isLoaded, error } = useFetch("./data/skills.json");
  // useEffect(() => {
  //   data && setSkills(data);
  // }, [data]);

  // if (isLoaded) {
  //   console.log(skills);
  //   if (error.length !== 0) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="App">
      <Navbar />
      <Header openMenu={handleContactMe} />

      <main>
        <Section
          additionalClass="skills"
          title="Skills"
          main={<ContainerSkills />}
        />

        <Section
          title="About me"
          additionalClass="about"
          main={<ContainerAbout />}
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

        <Section
          title="Contact me"
          additionalClass="contact"
          main={<ContainerContact />}
        />

        <div className={modalIsOpen ? "modal-bg open" : "modal-bg"}></div>
        <div className={modalIsOpen ? "modal open" : "modal"}>
          <button className="close-btn" onClick={handleContactMe}>
            <div className="cross"></div>
          </button>
          <h3 className="modal--title">Please feel free to contact me!</h3>
          <ContactForm />
        </div>
      </main>

      <footer className="footer">
        <div className="info">
          <div className="address"></div>
          <div className="phone"></div>
        </div>
        <div className="sns">
          <ul className="sns__list">
            <li className="sns__list__item"></li>
          </ul>
        </div>
        <div className="attribution">
          <p className="attribution__text">
            Coded and designed by William Farré ©️2023-{date.getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
