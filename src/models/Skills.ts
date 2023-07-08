interface skills {
  title: string;
  description: string;
  skills?: string[];
  image: string;
}

export class Skills {
  title: string;
  description: string;
  skills?: string[];
  image: string;
  constructor(data: skills) {
    this.title = data.title;
    this.description = data.description;
    this.skills = data.skills;
    this.image = data.image;
  }

  public get gettitle() {
    return this.title;
  }
  public get getdescription() {
    return this.description;
  }
  public get getskills() {
    return this.skills;
  }
  public get getimage() {
    return this.image;
  }
}
