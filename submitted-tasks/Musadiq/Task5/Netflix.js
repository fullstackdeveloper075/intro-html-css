baseMovies = ["A", "B", "C"]
premiumMovies = ["X", "Y", "Z"]
baseQuality = ["720", "480"]
premiumQuality = ["1080", "4K"]
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    getBasicMovies () {
        console.log("you have not subscreibed to this")
    }
    getPremiumMovies () {
        console.log("you have not subscreibed to this")
    }
}
class PremiumUser extends User {
    constructor(name, location, age) {
        super(name, location, age);
        this.qualities = baseQuality.concat(premiumQuality);
        this.movies = baseMovies.concat(premiumMovies);
    }
    getMovies() {
        return this.movies
    }
    getAvailableQualities() {
        return this.qualities
    }
    changeQuality(quality) {
        if (this.qualities.includes(quality)) {
            return "changed to quality : " + quality;
        }
        else {
            return "you don't have access to quality ", quality;
        } 
    }
    changeMovie(movie) {
        if (this.movies.includes(movie)) {
            return "changed to movie : " + movie;
        }
        else {
            return "you don't have access to movie ", movie;
        } 
    }
}

class BasicUser extends User {
    constructor(name, location, age) {
        super(name, location, age);
        this.qualities = baseQuality;
        this.movies = baseMovies;
    }
    getMovies() {
        return this.movies
    }
    getAvailableQualities() {
        return this.qualities
    }
    changeQuality(quality) {
        if (this.qualities.includes(quality)) {
            return "changed to quality : " + quality;
        }
        else {
            return "you don't have access to quality ", quality 
        } 
    }
    changeMovie(movie) {
        if (this.movies.includes(movie)) {
            return "changed to movie : " + movie;
        }
        else {
            return "you don't have access to movie ", movie;
        } 
    }
}
console.log("Premium User")
const premiunUser = new PremiumUser('Premium User', 'premium@user.com');
console.log("Available Qualities : " ,premiunUser.getAvailableQualities())
console.log(premiunUser.changeQuality('4K'));
console.log("Available Movies : " ,premiunUser.getMovies());
console.log(premiunUser.changeMovie("X"))
console.log()
console.log("Basic User")
const basicUser = new BasicUser('Basic User', 'basic@user.com');
console.log("Available Qualities : " ,basicUser.getAvailableQualities())
console.log(basicUser.changeQuality('720'));
console.log("Available Movies : " ,basicUser.getMovies());
console.log(basicUser.changeMovie("X"))
