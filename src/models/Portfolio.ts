interface PortolioItem {
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
}

export class Portfolio {
  // constructor(data: PortolioItem) {
  //  this._title = data.title;
  // this._description = data.description;
  // this._image = data.image;
  // this._url = data.url;
  // this._github = data.github;
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;

  constructor(data: PortolioItem) {
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.url = data.url;
    this.github = data.github;
  }
  // }

  public get gettitle() {
    // this.title = title
    return this.title;
  }

  get getdescription() {
    // this.title = title
    return this.description;
  }

  get getimage() {
    // this.title = title
    return this.image;
  }

  get geturl() {
    // this.title = title
    return this.url;
  }

  get getgithub() {
    // this.title = title
    return this.github;
  }
}

// "title": "Kasa",
//     "language": ["React"],
//     "description": "Bla blab laba",
//     "image": "kasaImg",
//     "url": "",
//     "github": ""

// class Accomodation {
//   constructor(data) {
//     this._id = data.id;
//     this._title = data.title;
//     this._cover = data.cover;
//     this._pictures = data.pictures;
//     this._description = data.description;
//     this._host = data.host;
//     this._hostPicture = data.hostPicture;
//     this._rating = data.rating;
//     this._location = data.location;
//     this._equipments = data.equipments;
//     this._tags = data.tags;
//   }

//   get id() {
//     return this._id;
//   }

//   get title() {
//     return this._title;
//   }

//   get cover() {
//     return this._cover;
//   }

//   get pictures() {
//     return this._pictures;
//   }

//   get description() {
//     return this._description;
//   }

//   get host() {
//     return this._host;
//   }

//   get hostName() {
//     return this._host.name;
//   }

//   get hostPicture() {
//     return this._host.picture;
//   }

//   get rating() {
//     return this._rating;
//   }

//   get location() {
//     return this._location;
//   }

//   get equipments() {
//     return this._equipments;
//   }

//   get tags() {
//     return this._tags;
//   }
// }
