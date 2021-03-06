//////////////////////////truthy and falsy
false, 0, empty string, null, undefined, NaN
let mystery = 5;

if (mystery) {
  console.log("truthy");
} else {
  console.log("falsy");
}

let loggedInUser = "thomas128";

if (loggedInUser) {
  console.log("you are logged in");
} else {
  console.log("please log in!");
}

//////////////////////////logical operator &&
let password = "chickenGal";

if (password.length >= 8 && password.indexOf(" ") === -1) {
  console.log(`valid password`);
} else {
  console.log(`invalid password`);
}

let num = 34;

if (num >= 1 && num <= 10) {
  console.log(`number is between 1 and 10`);
} else {
  console.log(`please guess a number between 1 and 10`);
}

//////////////////////////logical operator ||
let age = 36;

if (age < 6 || age >= 65) {
  console.log(`free for you`);
} else {
  console.log(`you pay now`);
}

//////////////////////////logical operator !
let loggedInUser;

if (!loggedInUser) {
  console.log(`get out of my site!`);
}

let flavor = "watermelon";

if (!(flavor === `grape` || flavor === `cherry`)) {
  console.log(`no flavored ice for you!`);
}

//////////////////////////switch statement
let day = 4;

switch (day) {
  case 1:
    console.log(`monday`);
    break;
  case 2:
    console.log(`tuesday`);
    break;
  case 3:
    console.log(`wednesday`);
    break;
  default:
    console.log(`invalid day`);
}

//////////////////////////ternary operator
let num = 7;

if (num === 7) {
  console.log(`lucky`);
} else {
  console.log(`bad`);
}

num === 7 ? console.log(`lucky`) : console.log(`bad`);


let shoppingList = ["cereal", "cheese", "ice"];

let myCollection = [12, "dog", true, null, NaN];

//////////////////////////array indices
let colors = ["red", "orange", "yellow", "green"];

//////////////////////////modifying arrays

let shoppingCart = ["Cheddar Cheese", "2% Milk"];

shoppingCart[1] = "Whole Milk";
shoppingCart[2] = "Ice Cream";

shoppingCart[shoppingCart.length] = "Tomatoes";

//////////////////////////array methods: push and pop
let topSongs = [
  "First Time Ever I Saw Your Face",
  "God Only Knows",
  "Life on Mars",
];

topSongs.push("Fortunate Son");

topSongs.pop();

//////////////////////////array methods: shift and unshift
let dishesToDo = ["big platter"];
dishesToDo.unshift("large plate");
2;
dishesToDo.unshift("small plate");
3;

dishesToDo.shift("large plate");
("small plate");

//////////////////////////concat
let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
//////////////////////////includes and indexof
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "brown sugar",
  "shrimp",
  "eel",
  "butter",
];
ingredients.includes("false");
false;

if (ingredients.includes("flour")) {
  console.log(`i am gluten free, i cannot eat that!`);
}

ingredients.indexOf("eel");
6;

//////////////////////////join and reverse
let letters = ["T", "C", "E", "P", "S", "E", "R"];
letters.reverse()(7)[("R", "E", "S", "P", "E", "C", "T")];

letters(7)[("R", "E", "S", "P", "E", "C", "T")];

letters.join();
("R,E,S,P,E,C,T");

letters.reverse().join("-");
("R-E-S-P-E-C-T");

//////////////////////////sort
let nums = [10, 32, 5, 10000];