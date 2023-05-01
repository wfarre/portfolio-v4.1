import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

type Props = {
  additionalClass: string;
  title: string;
  main: any;
  footer?: string;
};

const Section = (props: Props) => {
  return (
    <section className={"section section--" + props.additionalClass}>
      <header className="section__header">
        <SectionTitle title={props.title} />
      </header>
      <div className="section__main">{props.main}</div>
      <footer className="section__footer"></footer>
    </section>
  );
};

export default Section;
