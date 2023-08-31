class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
        console.log(`${this.name} attacks ${target.name} for ${this.power} damage!`);
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
            console.log(`${this.name} is played on ${target.name} - ${this.text}`);
        } else {
            console.log("Effect can only be played on a Unit.");
        }
    }
}

// Create instances of units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Create instances of effects
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Turn 1
hardAlgorithm.play(redBeltNinja);

// Turn 2
unhandledPromiseRejection.play(redBeltNinja);
blackBeltNinja.attack(redBeltNinja);

// Turn 3
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

// Display final stats
console.log("Final Stats:");
console.log(redBeltNinja);
console.log(blackBeltNinja);
