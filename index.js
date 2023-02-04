// Using functions as Arguements
function greet() {
  console.log('Hi!, i Love You!!')
}

function diss() {
  console.log('Your The waste!!');
}

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
// function greet() {
//   console.log('Hi!, i Love You!!')
// }

// function diss() {
//   console.log('Your The waste!!');
// }

// const funcs = [greet, diss];

// const myFunc = function add(x, y) {
//   return x + y;
// }

// Return value of a function can be another function
// function giveBirth() {
//   return function cry() {
//     return 'WAAAAAH!!'
//   }
// }
// // In the console
// giveBirth()
// // OR
// giveBirth()()
// // OR
// const func = giveBirth()
// // func() => WAAAAAH!!

function makeMultipleFunc(num) {
  return function mul(x) {
    return num * x;
  }
}

// makeMultipleFunc()
//  mul(x) {
//     return num * x;
//   }
// const quad = makeMultipleFunc(4)
// quad
//  mul(x) {
//     return num * x;
//   }
// const double = makeMultipleFunc(2)
// undefined
// double
//  mul(x) {
//     return num * x;
//   }
// double(4)
// 8
// double(419)
// 838
// double(41)
// 82
// quad(4)
// 16
// quad(2)
// 8
// quad(4)
// 16
// quad(3)
// 12

// greet();
// alert('I AM AN ALERT!!');
// diss();

// greet();
// setTimeout(diss, 3000);
// diss();
// greet();

// const id = setInterval(greet, 1000);

// greet();
// setTimeout(function () {
//   diss();
//   diss();
//   diss();
// }, 1000)
// greet();


// setTimeout(function () {
//   console.log('Bwoh!');
//   console.log('Myaoh!');
//   console.log('Onick!');
// }, 3000);

// function doItTwice(func) {
//   func();
//   func();
//   func();
// }

// doItTwice(diss);

// function doItTwice(func) {
//   func();
//   func();
//   func();
// }

// doItTwice(function () {
//   console.log('Stop bothering me!!');
//   console.log('Please go away!')
// });

// // Storing Anonymous functions in variables
// const printOne = function () {
//   console.log('ONE');
// }

function countdown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log('WALAYII!!');
    } else {
      console.log(time);
    }
  }, 2000)
}

