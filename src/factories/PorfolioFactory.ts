import { Portfolio } from "../models/Portfolio";

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
}

export class PorfolioFactory {
  constructor(data: PortfolioItem, type: string) {
    if (type === "json") {
      return new Portfolio(data);
    }
  }
}
