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
  // const index = toys.length - 1
  // const maxId = toys[index].id;
  // const id = maxId + 1;

  // toyObject.id = id;

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

//function for removing a product from the inventory, including in toyPrices map
const removeProduct = (id) => {
  for (let i = 0; i < toys.length; i++) {
    if (toys[i].id === id) {
      console.log(`removing ${toys[i].name}`);
      toys.splice(i, 1);
      break;
    }
  }
};

removeProduct(2);

for (let [toyObj, price] of toyPrices) {
  console.log(`${toyObj.name} costs $${price}.`);
}


