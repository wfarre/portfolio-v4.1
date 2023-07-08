import { Skills } from "../models/Skills";

interface skills {
  title: string;
  description: string;
  skill?: string[];
  image: string;
}

export class SkillsFactory {
  constructor(data: skills, type: string) {
    if (type === "json") {
      return new Skills(data);
    }
  }
}
