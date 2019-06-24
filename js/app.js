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


























//  tips for the bond question
// $100101 + $121212 wont give you the actual sum
// strings must be converted into a number
// make a new array that has all the commas and $ signs in them
// then just add the 1st array. 











