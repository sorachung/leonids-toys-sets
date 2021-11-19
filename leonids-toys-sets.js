//make new set toys to be filled with unique toy objects
const toys = new Set();

//toy objects to add to toys set
const woodenBlocks = {
  id: 1,
  inStock: true,
  upc: 2425323324,
  name: "Wooden Blocks",
  ageRange: [0, 100],
  category: "blocks",
  brand: "Mattel",
  franchise: null,
  battery: false,
};

const chess = {
  id: 2,
  inStock: false,
  upc: 2425323325,
  name: "Wooden Chess Set",
  ageRange: [5, 100],
  category: "games",
  brand: "Chess Master",
  franchise: null,
  battery: false,
};

const jigsaw = {
  id: 3,
  inStock: true,
  upc: 2425323326,
  name: "Cat Lover's Jigsaw Puzzle",
  ageRange: [5, 100],
  category: "puzzles",
  brand: "Ridley's",
  franchise: null,
  battery: false,
};

const rubiksCube = {
  id: 4,
  inStock: true,
  upc: 630509932818,
  name: "Rubik's Cube",
  ageRange: [8, 100],
  category: "puzzles",
  gender: "all",
  brand: "Hasbro",
  franchise: null,
  battery: false,
};

const giantGiraffe = {
  id: 5,
  inStock: false,
  upc: 490860221248,
  name: "Melissa & Doug Giant Giraffe - Lifelike Stuffed Animal",
  ageRange: [3, 100],
  category: "stuffed animals",
  brand: "Hasbro",
  franchise: null,
  battery: false,
};

const uno = {
  inStock: false,
  upc: 887961219722,
  name: "UNO Card Game - Retro Edition",
  ageRange: [7, 100],
  category: "games",
  brand: "Mattel",
  franchise: null,
  battery: false,
};

//create map with toy object-prices as the key-value pairs
const toyPrices = new Map();

//function for adding a toy to the inventory
const addToyToInventory = (toyObject, price) => {
  let id;
  if (toys.size === 0) {
    id = 1;
  } else {
    const iterator1 = toys.values();
    let lastToy = null;
    for (const toy of toys) {
      lastToy = iterator1.next().value;
      // console.log("iterator value", lastToy)
    }
    id = lastToy.id + 1;
  }

  toyObject.id = id;

  toys.add(toyObject);
  toyPrices.set(toyObject, price);
};

//adding all toys to the inventory
addToyToInventory(woodenBlocks, 5.0);
addToyToInventory(chess, 10.99);
addToyToInventory(jigsaw, 3.99);
addToyToInventory(rubiksCube, 10.99);
addToyToInventory(giantGiraffe, 79.99);
addToyToInventory(uno, 5.99);

//log out toy names and ids
for (const toy of toys) {
  console.log(`The id of ${toy.name} is ${toy.id}`)
}

//log out names of each toy
const toyNames = [];
toys.forEach((toy) => toyNames.push(toy.name));
console.log(toyNames);

//find a specific toy by id
const toyToFind = 2;

for (const toy of toys) {
  if (toy.id === toyToFind) {
    console.log("toy found:", toy.name);
  }
}

//function for removing a toy from inventory. Also removes from toyPrices map
const removeProduct = (id) => {
  for (const toy of toys) {
    if (toy.id === id) {
      console.log("this is a toy:", toy);
      toyPrices.delete(toy);
      console.log(`removing ${toy.name}`);
      toys.delete(toy);
    }
  }
};

removeProduct(2);

//log out all toy and toy prices
for (let [toyObj, price] of toyPrices) {
  console.log(`${toyObj.name} costs $${price.toFixed(2)}.`);
}
