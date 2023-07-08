import React, { useState, useEffect } from "react";

import useFetch from "../../utils/useFetch";
import Card from "../Card/Card";
import "./assets/Container.scss";
import { SkillsFactory } from "../../factories/SkillsFactory";

interface skillType {
  title: string;
  description: string;
  image: string;
  skills?: string[];
}

type Props = {};

const ContainerSkills = (props: Props) => {
  const [skills, setSkills] = useState<skillType[]>([]);

  const { data, isLoaded, error } = useFetch(
    "./data/skills.json",
    SkillsFactory,
    "json"
  );
  useEffect(() => {
    data && setSkills(data);
  }, [data]);
  return (
    <div className="container">
      {isLoaded === true &&
        skills?.map((skill: skillType, key: number = 0) => {
          key++;
          return (
            <Card
              key={"card" + key}
              title={skill.title}
              description={skill.description}
              skillsList={skill.skills}
              image={skill.image}
            />
          );
        })}
    </div>
  );
};

export default ContainerSkills;
