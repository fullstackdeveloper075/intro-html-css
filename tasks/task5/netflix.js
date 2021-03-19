
const PREMIUM_QUALITIES = ['NORMAL', 'HD', '4KUHD'];
const STANDARD_QUALITIES = ['NORMAL', 'HD'];
const BASIC_QUALITIES = ['NORMAL'];

const PREMIUM_SCREENS_ACCESS = 10;
const STANDARD_SCREENS_ACCESS = 5;
const BASIC_SCREENS_ACCESS = 1;

class User {

    constructor(name, location, age) {
        this.name = name;
        this.location = location;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

    setLocation(newLocation) {
        this.location = newLocation;
    }

    getLocation() {
        return this.location;
    }

    getBasicMovies() {
        console.log(`you don't have access to this`);
    }

    getPremiumMovies() {
        console.log(`you don't have access to this`);
    }

    getStandardMovies() {
        console.log(`you don't have access to this`);
    }

    changeQuality(quality) {
        if (this.qualities && this.qualities.includes(quality))
            return console.log(`changed to ${quality}`);

        console.log(`you don't have access to this`);
    }

    getAvailableQualities() {
        return this.qualities;
    }

}

class PremiumUser extends User {

    constructor(name, location, age) {
        super(name, location, age);
        this.qualities = PREMIUM_QUALITIES;
    }

    getBasicMovies() {
        console.log('your movie list')
        return [];
    }

    getPremiumMovies() {
        console.log('your movie list')
        return [];
    }

    getStandardMovies() {
        console.log('your movie list')
        return [];
    }

}

class StandardUser extends User {

    constructor(name, location, age) {
        super(name, location, age);
        this.qualities = STANDARD_QUALITIES;
    }

    getBasicMovies() {
        console.log('your movie list')
        return [];
    }

    getStandardMovies() {
        console.log('your movie list')
        return [];
    }

}

class NormalUser extends User {

    constructor(name, location, age) {
        super(name, location, age);
        this.qualities = BASIC_QUALITIES;
    }

    getBasicMovies() {
        console.log('your movie list')
        return [];
    }

}


const standardUser = new StandardUser('kiran', 'pune', 25);
standardUser.changeQuality('4KUHD');
standardUser.getPremiumMovies();
standardUser.getStandardMovies();

const premiunUser = new PremiumUser('kiran', 'pune', 25);
premiunUser.changeQuality('4KUHD');
premiunUser.getPremiumMovies();
premiunUser.getStandardMovies();
