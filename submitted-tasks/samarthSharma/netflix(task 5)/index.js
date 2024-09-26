const PREMIUM_WATCHABLES = {
  movies: "lorem",
  shows: "ipsum",
  animes: "dolor",
};

const STANDARD_WATCHABLES = {
  movies: "lorem",
  shows: "ipsum",
};

const MOBILE_WATCHABLES = {
  movies: "lorem",
};

class Plan {
  constructor(name, location, age) {
    this.name = name;
    this.location = location;
    this.age = age;
  }

  get Name() {
    return this.name;
  }

  set Name(name) {
    this.name = name;
  }

  set Location(location) {
    this.location = location;
  }

  get Location() {
    // send location to KHABIB
    return this.location;
  }

  set Age(age) {
    this.age = age;
  }

  get Age() {
    return this.age;
  }

  get Movies() {
    console.log("To watch this you must subscribe to NETFLIX");
  }

  get Shows() {
    console.log("To watch this you must subscribe to NETFLIX");
  }

  get Animes() {
    console.log("To watch this you must subscribe to NETFLIX");
  }
}

class PremiumPlan extends Plan {
  constructor(name, location, age) {
    super(name, location, age);
    this.watchAbles = PREMIUM_WATCHABLES;
  }

  get Movies() {
    console.log("your movie list");
  }

  get Shows() {
    return this.watchAbles.shows;
  }

  get Animes() {
    return this.watchAbles.animes;
  }
}

class StandardPlan extends Plan {
  constructor(name, location, age) {
    super(name, location, age);
    this.watchAbles = STANDARD_WATCHABLES;
  }

  get Movies() {
    return this.watchAbles.movies;
  }

  get Shows() {
    return this.watchAbles.shows;
  }
}

class MobilePlan extends Plan {
  constructor(name, location, age) {
    super(name, location, age);
    this.watchAbles = MOBILE_WATCHABLES;
  }

  get Movies() {
    return this.watchAbles.movies;
  }
}
