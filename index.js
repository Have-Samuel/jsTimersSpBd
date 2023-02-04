function greet() {
  console.log('Hi!, i Love You!!')
}

function diss() {
  console.log('Your The waste!!');
}

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function repeat(num, func) {
  for (let i = 0; i < num; i++) {
    func();
  }
}