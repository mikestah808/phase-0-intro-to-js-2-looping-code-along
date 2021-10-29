// Code your solutions in this file


// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);



const names = ['mike', 'joe', 'kev'];


function writeCards(names, event) {
  let birthday = []; // i don't understand why birthday is assigned a value of an empty object 
  event = "surprise";
  for (let i = 0; i < names.length; i++) {
    birthday[i] = ('Thank you, ' + names[i] + ', for the wonderful ' + event +' gift!')
  }
  return birthday;
}
// ask for help in js prework support on how to use interpolation

function countDown(number) {
let countDown = 10;
while (number >= 0) {
  console.log(number--);
}
}