// let firstNumber = prompt("Enter your first number");
// let secondNumber = prompt("Enter your second number");

// let sum = Number(firstNumber) + Number(secondNumber);
// let sub = Number(firstNumber) - Number(secondNumber);
// let mult = Number(firstNumber) * Number(secondNumber);
// let div = Number(firstNumber) / Number(secondNumber);

// alert("The sum is: " + sum + "The subtraction is: " + sub + "The multiplication is: " + mult + "The division is: " + div);

/*
let age = prompt("Please enter your age");
let ageNum = Number(age);
if (ageNum < 18) {
  alert("Powering off")
} else if (ageNum === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  alert("Powering on. Enjoy the ride!");
}
*/

function callAlert() {
  console.log("wyd bro!");
}
callAlert();

let sayBye = function () { //function expression (anonymous function)
  console.log("bye bro bro!");
}
sayBye();

//arguments (basic
function sing(song) {
  console.log(song);
}
sing("doe re mi!");


//return 
let a = function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that\'s too hard for my small brain!";
  } else {
    return a * b; //return exits function (final way to end function)
  }
  return a * b;
}
// multiply();
// a();
console.log(a(4, 5));
alert(a(12, 12)); //that's too hard for my small brain as an alert

let b = a; //changing variables

//  parameters - are the actual arguments (a,b)
//  arguments - function calls arguments 