const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    // ... (rest of the Pokémon data)
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const divisibleBy3 = pokémon.filter(p => p.id % 3 === 0);

// an array of pokémon objects that are "fire" type
const fireTypePokémon = pokémon.filter(p => p.types.includes("fire"));

// an array of pokémon objects that have more than one type
const multipleTypesPokémon = pokémon.filter(p => p.types.length > 1);

// an array with just the names of the pokémon
const pokémonNames = pokémon.map(p => p.name);

// an array with just the names of pokémon with an id greater than 99
const namesWithIdGreaterThan99 = pokémon
    .filter(p => p.id > 99)
    .map(p => p.name);

// an array with just the names of the pokémon whose only type is poison
const poisonTypePokémonNames = pokémon
    .filter(p => p.types.length === 1 && p.types[0] === "poison")
    .map(p => p.name);

// an array containing just the first type of all the pokémon whose second type is "flying"
const firstTypeWithSecondFlying = pokémon
    .filter(p => p.types.length === 2 && p.types[1] === "flying")
    .map(p => p.types[0]);

// a count of the number of pokémon that are "normal" type
const normalTypeCount = pokémon
    .filter(p => p.types.includes("normal"))
    .length;

console.log(divisibleBy3);
console.log(fireTypePokémon);
console.log(multipleTypesPokémon);
console.log(pokémonNames);
console.log(namesWithIdGreaterThan99);
console.log(poisonTypePokémonNames);
console.log(firstTypeWithSecondFlying);
console.log(normalTypeCount);
