// // Using functions as Arguements
// function greet() {
//   console.log('Hi!, i Love You!!')
// }

// function diss() {
//   console.log('Your The waste!!');
// }

// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function repeat(num, func) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

// Storing functions in variables
function greet() {
  console.log('Hi!, i Love You!!')
}

function diss() {
  console.log('Your The waste!!');
}

const funcs = [greet, diss];

const myFunc = function add(x, y) {
  return x + y;
}