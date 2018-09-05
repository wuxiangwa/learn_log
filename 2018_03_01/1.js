// 数组乱序
"use strict";
// simple fisher yates implementation
// const shuffle = (deck) => {
//   let randomizedDeck = [];
//   let array = deck.slice();
//   // console.log(deck, array, array.length, Math.random())
//   while (array.length !== 0) {
//     // console.log(array.length);
//   	let rIndex = Math.floor(array.length * Math.random());
//     randomizedDeck.push(array[rIndex]);
//     array.splice(rIndex, 1)
//   }
//   return randomizedDeck;
// };


function shuffle(array) {
  var _array = array.concat();

  for (var i = _array.length; i--;) {
    var j = Math.floor(Math.random() * (i + 1));
    // console.log(i + 1);
    console.log(j);
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
    // console.log(_array);
  }
  return _array;
}

// function shuffle(a) {
//   return a.concat().sort(function(a, b) {
//     return Math.random() - 0.5;
//   });
// }
const deck = [1,2,3,4,5,6,7,8];
// Testing
// console.log(Math.random(deck));
console.log(shuffle(deck));
let str = "hello world";
for (let i in str) {
  // console.log(i)
}
let a = str.replace(/[\s\S*]/g, function(a, index) {
  // console.log('replace:', a, index, str[index + 1]);

  return 'a';
});
// console.log(a);
