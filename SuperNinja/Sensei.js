const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("");
        console.log(`${this.name} says, "Never put passion in front of principle. Even if you win, you'll lose."`);
        return this;
    }

    showStats(){
        console.log(`Showing stats below for Sensei named ${this.name}`);
        console.log("");
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}\nWisdom: ${this.wisdom}`);
        return this;
    }

    sayName(){
        console.log(`This sensei's name is ${this.name}`);
        return this;
    }
}

const Miyagi = new Sensei("Mr. Miyagi");


// Miyagi.sayName().showStats().speakWisdom().showStats(); // another way to write it, but harder to read in terminal
console.log("");
Miyagi.sayName();
console.log("");
Miyagi.showStats();
console.log("");
Miyagi.speakWisdom();
console.log("");
Miyagi.showStats();
console.log("");