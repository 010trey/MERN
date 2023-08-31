//  Classes ?  blueprint or template to create objects

//  Book class => books (objects)

class Book {
    // Constructor
    // Attributes
    constructor (title, pages, author, year) {
        this.title = title
        this.pages = pages
        this.author = author
        this.year = year
    }
}

// - Create an object

const book = new Book("Book of Life",1000, "James", 1800)
// console.log(book);

const {title:bookTitle} = book
//  console.log(`The book title is ${bookTitle}`);


class Vehicle{
    constructor(make,model,year,hp,color="Black") {
        this.make = make
        this.model = model
        this.year = year
        this.miles = 0
        this.hp = hp
        this.color = color 
    }
    drive(n){
        if(n<=1){
            this.miles+=20
            console.log(`${this.model} has driven 20 miles , miles now equals to ${this.miles} `);
            return this
        }
        this.miles+=20
        console.log(`${this.model} has driven 20 miles , miles now equals to ${this.miles} `);
        return this.drive(n-1)
    }

    honk(target){
        console.log("BEEEEP", this.model, "honked at", target.model);
        return this
    }
}

const vehicle1 = new Vehicle("WV","Golf", 2010,140)
const vehicle2 = new Vehicle("WV","Polo", 2015,140,"Red")
// console.log(vehicle1);
// vehicle2.drive(10)
// console.log(vehicle2);
// vehicle2.honk(vehicle1)

// OOP Pillar  :  inheritance 

class Tesla extends Vehicle {
    constructor(model,year,hp, autopilot){
        super("X",model, year,hp)
        this.autopilot = autopilot
    }
}
const y = new Tesla("Y", 2020, 200,"Gray",true)
const x = new Tesla("X", 2023, 200,true)
console.log(y);
console.log(x);