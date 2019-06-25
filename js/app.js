// DATA TYPES
// 1. Boolean
// 2. "string"
// 3. an Object
// 4. an Array
// 5. an Object
// 6. an Object


// Take it Easy
//1.
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//2.
console.log(rainbowColors[4]);
//3.
balthazar = {
	hobby: "3d modeling",
	favoriteFood: "beef jerky",
	currentCity: "Denver",
	favoriteDataType: "strings",
}
console.log(balthazar.hobby);


// Crazy Objects
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}

// 1. 
console.log(crazyObject.taco[1].salsa[5]);
// 2. 
console.log(crazyObject.larry.quotes[0]);
// 3.
console.log(crazyObject.larry.characters[2].favourtieHobby);
// 4.
console.log(crazyObject.larry.characters);



// Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);



// Bond Films

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// 5.
let bondTitles = [];

for(let key in bondFilms) {
	// console.log(bondFilms[key].title)
	bondTitles.push(bondFilms[key].title)
}
console.log(bondTitles);


// 6.
let oddBonds = [];

for(let key in bondFilms) {
	if(bondFilms[key].year % 2 !== 0) {
		oddBonds.push(bondFilms[key].title)
	}
}

console.log(oddBonds);

//7. Had lots of issues with this one. I got to the point where i have a list
// of strings, without the $. i cant seem to get rid of the commas.

let cashBonds = [];
let cash2 = [];
for (let key in bondFilms) {
	cashBonds.push(bondFilms[key].gross)
}
console.log(cashBonds);

for(let i = 0; i < cashBonds.length; i++){
	cash2.push(cashBonds[i].slice(1));
	
}
console.log(cash2);

// i spent a long time trying to work out the logic of how to do this with no
// methods. I am stumped and couldn't find and resourses that helped me at all.
// i got to remove the $, but i couldnt get the commas out of there and couldnt 





// let start = ["$2,400,999", "$2,300,890"];
// let mid = [];
// let end = [];
// let end2 = [];
// for(let i = 0; i < start.length; i++){
// 	mid.push(start[i].slice(1));
// }
// console.log(mid);

// for(let i = 0; i < mid.length; i++){
// 	end = mid.split();
// }

// console.log(end);
// y.push(x.slice(1));
// console.log(y);

// let x = ["$2400", "$2300"];
// let y = [];
// for(let i = 0; i < x.length; i++){
// 	y = x[i].slice(1);
// 	console.log(y);
// }












//  tips for the bond question
// $100101 + $121212 wont give you the actual sum
// strings must be converted into a number
// make a new array that has all the commas and $ signs in them
// then just add the 1st array. 











