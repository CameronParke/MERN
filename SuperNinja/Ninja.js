class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`This ninja's name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`Showing stats below for Ninja named ${this.name}`);
        console.log("");
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
        return this;
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank Sake.\n\n+10 Health added to ${this.name}\n\n${this.name}'s health is now ${this.health}`);
        return this;
    }
}

const Zatoichi = new Ninja("Zatoichi", 65);

// Zatoichi.sayName().showStats().drinkSake().showStats(); // another way to write it

// console.log("");
// Zatoichi.sayName();
// console.log("");
// Zatoichi.showStats();
// console.log("");
// Zatoichi.drinkSake();
// console.log("");
// Zatoichi.showStats();
// console.log("");

module.exports = Ninja;