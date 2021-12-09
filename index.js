// // Code your solutions in this file

// for(let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//   for(let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }

// wrapGifts(gifts);





const names = ['mike', 'april', 'jacob']

const event = 'Summer bash';

const message = [];

function writeCards(names, event) {
  for(let i = 0; i < names.length; i++) {
    message[i] = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
  }
  return message;
  // collect them in a new array and RETURN this array at the end of the function
}

function countDown(number) {
  let countDown = 10;
  while(number >= 0) {
    console.log(number--);
  }
}