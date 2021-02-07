//zad 1

class Persone {
    constructor(name, surename, age, country, language) {
        this.name = name;
        this.surename = surename;
        this.age = age;
        this.country = country;
        this.language = language;
    }

    Change_age(value) {
        this.age = value;
    }

    Change_country(val) {
        this.country = val;
    }
}


const wiktoria= new Persone('wiktoria','przeniczna',38,'Polska','Polski');
const Nina=new Persone('Nina','mazurenko',64,"Rosji","Ukrainski");
const angelika= new Persone('angelika','zawija',41,'bulgury','chinski');
const jacek=new Persone('jacek','jaciborski',35,'rosja','niemieccki');
const pawel=new Persone('pawel','okocim',90,'meksyk','angielski')

console.log(wiktoria);
wiktoria.Change_age(25);
wiktoria.Change_country("rosja");
console.log(wiktoria);

//zad 2
class Calculator {
    constructor() {
        this.memmory = [];
    }

    sum(x, y) {
        const score = x + y;
        this.memmory.push([`${x} + ${y} = ${score}`])
        console.log(score);
    }

    subtract(x, y) {
        const score = x - y;
        this.memmory.push([`${x} - ${y} = ${score}`])
        console.log(score);
    }

    multiply(x, y) {
        const score = x * y;
        this.memmory.push([`${x}*${y} = ${score}`])
        console.log(score);
    }

    divide(x, y) {
        const score = x / y;
        this.memmory.push([`${x}/${y} = ${score}`])
        console.log(score);
    }

    List(){
        this.memmory.forEach(el =>{
            console.log(el);
        });
    }

    Cleaner(){
        this.memmory = [];
    }
}

const how = new Calculator();
how.sum(25, 4);
how.divide(65, 8);
how.List();
how.Cleaner();
how.List();

const how2 = new Calculator();
how2.multiply(15, 14);
how2.subtract(62, 98);
how2.List();
how2.Cleaner();
how2.List();


//zad 3 

class Game {
    constructor() {
    }

    Randid() {
        Game.prototype.timer = setInterval(() => {
            Game.prototype.number = Math.round(Math.random() * 10);
            console.log(Game.prototype.number);
        }, 1000);
    }

    check() {
        Game.prototype.time = setInterval(() => {
            if (Game.prototype.number > 5) {
                
                clearInterval(this.timer);
                clearInterval(this.time);
            }
        }, 1000);
    }
}

const rew1 = new Game;
const rew2 = new Game;
rew1.Randid();
rew2.check();