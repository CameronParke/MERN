const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
// Names that start with the letter "B"
const bListPkmn = pokémon.filter( p => p.name[0] === "B" ); // Goes into pokémon, filters based on the item's name and index, where the index will filter based on which letter it is in the name (first = [0], second = [1], third [2], etc)

// An array of just the ids
const pkmnIds = pokémon.map( p => p.id ) // Goes into pokémon, applies the callback function to the id and returns a new array of just the ids

// An array of pokémon objects where the id is evenly divisible by 3
const DivisbleByThreeIds = pokémon.filter(p => p.id % 3 === 0);

// An array of pokémon objects that are "fire" type
const FireTypes = pokémon.filter(p => p.types.includes("fire"));

// An array of pokémon objects that have more than one type
const MultipleTypes = pokémon.filter(p => p.types.length > 1);

// An array with just the names of the pokémon, sorted alphabetically for better readability
const JustTheNames = pokémon.map(p => p.name).sort();

// An array with just the names of the pokémon with an id greater than 99
const GreaterThanGretzky = pokémon.filter(p => p.id > 99).map(p => p.name);

// An array with just the names of the pokémon whose only type is poison
const OnlyPoisonTypes = pokémon.filter(p => p.types == "poison").map(p => p.name);

// An array containing just the first type of all the pokémon whose second type is "flying"
const FirstTypeIfSecondTypeFlying = pokémon.filter(p => p.types[1] == "flying").map(p => p.types[0]);

// A count of the number of pokémon that are "normal" type
const NormalTypes = pokémon.filter(p => p.types.includes("normal")).length;

console.log("");
console.log(bListPkmn);
console.log("");
console.log(pkmnIds);
console.log("");
console.log(DivisbleByThreeIds);
console.log("");
console.log(FireTypes);
console.log("");
console.log(MultipleTypes);
console.log("");
console.log(JustTheNames);
console.log("");
console.log(GreaterThanGretzky);
console.log("");
console.log(OnlyPoisonTypes);
console.log("");
console.log(FirstTypeIfSecondTypeFlying);
console.log("");
console.log(NormalTypes);
console.log("");

