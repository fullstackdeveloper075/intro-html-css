Basic_Movies = ['No Problem', 'dhammal', 'dhol']
Preminum_Movies_Additional = ['Phri Hera Pheri', 'Andaaz apna apna']


class Usr {
    constructor(name, email, pass, number){
        this.name = name
        this.email = email
        this.password = pass
        this.number = number
    }
}    

class Basic_usr extends Usr {

    super(name, email, pass, number, subscription)
    set_subs() {
        this.subscription = 'BASIC'
    }
    show_movies() {
        console.log(Basic_Movies)
    }
}

class Premium_usr extends Usr {
    super(name, email, pass, number, subscription)
    set_subs() {
        this.subscription = 'PREMIUM'
    }
    Premiun_Movies = Preminum_Movies_Additional.concat(Basic_Movies)
    show_movies() {
        console.log(Preminum_Movies)
    }
}


var Premium_usr = new Premium_usr('Rushi', 'rushi@1234.com', 78912365)
Premium_usr.show_movies()

var Basic_usr = new Basic_usr('Rushi', 'rushi@1234.com', 78912365)
Basic_usr.show_movies()



