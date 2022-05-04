const Card = require("./Card");

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${this.name} attacked ${target.name}\n${target.name}'s resililience was reduced by -${this.power}\n${target.name}'s resilience is now ${target.resilience}`);
        }
        else {
            throw new Error("Target must be a Unit!");
        }
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat === "resilience"){
                target.resilience += this.magnitude;
                console.log(`${target.name} was dealt ${this.name}.\n${this.name} says "${this.text}"\n${target.name}'s resilience was altered by ${this.magnitude} and is now ${target.resilience}`)
            }
            else if(this.stat === "power"){
                target.power += this.magnitude;
                console.log(`${target.name} was dealt ${this.name}.\n${this.name} says "${this.text}"\n${target.name}'s power was altered by ${this.magnitude} and is now ${target.power}`)
            }
        }
        else {
            throw new Error("Target must be a Unit!");
        }
    }
}

// TURN 1
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const HardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
console.log("");
console.log(`${RedBeltNinja.name} has\nResilience: ${RedBeltNinja.resilience}\nPower: ${RedBeltNinja.power}`)
console.log("");
HardAlgorithm.play(RedBeltNinja);
console.log("");
console.log(`${RedBeltNinja.name} has\nResilience: ${RedBeltNinja.resilience}\nPower: ${RedBeltNinja.power}`)

//TURN 2
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
console.log("");
console.log(`${BlackBeltNinja.name} has\nResilience: ${BlackBeltNinja.resilience}\nPower: ${BlackBeltNinja.power}`)
console.log("");
UnhandledPromiseRejection.play(RedBeltNinja);
console.log("");
console.log(`${RedBeltNinja.name} has\nResilience: ${RedBeltNinja.resilience}\nPower: ${RedBeltNinja.power}`)

// TURN 3
const PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", +2);
console.log("");
PairProgramming.play(RedBeltNinja);
console.log("");
console.log(`${RedBeltNinja.name} has\nResilience: ${RedBeltNinja.resilience}\nPower: ${RedBeltNinja.power}`)
console.log("");
console.log(`${BlackBeltNinja.name} has\nResilience: ${BlackBeltNinja.resilience}\nPower: ${BlackBeltNinja.power}`)
console.log("");
RedBeltNinja.attack(BlackBeltNinja);
console.log("");
console.log(`${BlackBeltNinja.name} has\nResilience: ${BlackBeltNinja.resilience}\nPower: ${BlackBeltNinja.power}`)
