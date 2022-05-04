class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`This ninja's name is ${this.name}`);
    }

    showObjectAndStats(){
        console.log(`Showing stats below for Ninja named ${this.name}`);
        console.log(this);
    }

    showStats(){
        console.log(`Showing stats below for Ninja named ${this.name}`);
        console.log("");
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nSpeed: ${this.speed}\nStrength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank Sake.\n+10 Health added to ${this.name}`);
    }
}

const Zatoichi = new Ninja("Zatoichi", 65);

console.log("");
Zatoichi.sayName();
console.log("");
Zatoichi.showStats();
console.log("");
Zatoichi.drinkSake();
console.log("");
Zatoichi.showStats();
console.log("");

console.log("");
Zatoichi.sayName();
console.log("");
Zatoichi.showObjectAndStats();
console.log("");
Zatoichi.drinkSake();
console.log("");
Zatoichi.showObjectAndStats();
console.log("");