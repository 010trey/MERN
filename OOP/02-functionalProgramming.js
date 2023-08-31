// ---- Callback functions 

// ? callback function is function passed as an parameter to another function

// setTimeout(()=> console.log("Hello *****"),5000)

const makePurchase = (person, price) => {
    console.log("Processing purchase for ", person, "charged ", price);
}

const returnItem  = (person, itemPrice) => {
    console.log("Processing returned Item for ", person, "refund ", itemPrice);

}
const processTransaction = (operation, person, price) => {
    console.log("Transaction Started");
    operation(person, price)
    console.log("Transaction Ended");
}

// processTransaction(makePurchase, "Alex", 200)
// processTransaction(returnItem, "Alex", 500)


// -        MAP & Filter 

const array1 = [1,4,9,16]; 
// const sumArray = 0
// for(let i = 0; i< array1.length;i++){
//     sumArray+= array1[i]
// }

const array2 = [];
for(let i=0;i<array1.length;i++){
    array2.push(array1[i]*2)
}
// console.log(array2);
// const arrayMap = array1.map(function (elementOfTheArray,index) {
//     console.log(`Index is ${index} --- Element is ${elementOfTheArray}`);
//     return elementOfTheArray*2
// })
// const arrayMap = array1.map( (elementOfTheArray,index)=> {
//     console.log(`Index is ${index} --- Element is ${elementOfTheArray}`);
//     return elementOfTheArray*2
// })
const multiplyNumber = (n) => n*2
const arrayMap = array1.map( (element)=>multiplyNumber(element))
// console.log(arrayMap);

// *    Filter 

const animals  = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"]; 

const animalsWithO = []; 
for(let i=0; i<animals.length;i++){
    if(animals[i].includes("o") ){
        animalsWithO.push(animals[i])
    }
}
// console.log(animalsWithO);

const filteredAnimals = animals.filter(element=> element.includes("o"))
// console.log(filteredAnimals);

const animals6  = animals.filter(element=> {return element.length>5})
// console.log(animals6);

// *        COMBINE Filter and Map

const coolAnimals  =  animals.filter(animal=> animal.includes("o")).map(animal=> animal+ " is cool 🎈")
// console.log(coolAnimals);

//  -  Reduce 

const sum = array1.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
// console.log(sum);
// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArrays.reduce((accumulator, currentValue) => {
//     console.log("Accumulator  = ", accumulator, "Cu Acc  = ", accumulator.concat(currentValue));
//     return accumulator.concat(currentValue)
// }, []);

// -  freeze 
const user  = Object.freeze({
    name:"John",
    age:39
})
// const user  = {
//     name:"John",
//     age:39
// }
    user.favFood = "🐹"
    const newUser  = {...user}
    newUser.favFood = "🐹"
    console.log(user);