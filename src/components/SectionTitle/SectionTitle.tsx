import { useEffect, useState } from "react";
import React from "react";
import { generateTitle } from "../../utils/generateTItle";

type Props = { title: string };

const SectionTitle = (props: Props) => {
  const titleArray = generateTitle(props.title);
  return (
    <h2 className="section__header__title">
      {titleArray.map((letter) => {
        return (
          <span key={letter.key} className={letter.className}>
            {letter.letter}
          </span>
        );
      })}
    </h2>
  );
};

export default SectionTitle;
