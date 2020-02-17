let toDos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study js",
  "eat healthy"
];
let toDosImportant = [
  "clean room!!",
  "brush teeth!!",
  "exercise!!",
  "study js!!",
  "eat healthy!!"
];

let objectArray = [
  {
    name: "Zamir",
    age: 25,
    hobby: "PC, Snowboarding",
    isMarried: false
  }
];



//For Loop
for (let i = 0; i < toDos.length; i++) {
  // console.log(toDos[i] + "!");
  toDos[i] = toDos[i] + "!"; //each item equals each item plus !
};

// pop each item out 
// let toDosLength = toDos.length; // const length of 5
// for (let i = 0; i < toDosLength; i++) {
//   toDos.pop();
// };


//For Loop vs forEach
//For
let toDosLength = toDos.length;
for (i = 0; i < toDosLength; i++) {
  console.log(toDos[i], i);
}

//forEach
// toDos.forEach(function (toDos, i) {
//   console.log(toDos, i);
// })

//function to use that logs toDos and index
function logToDos(toDos, i) {
  console.log(toDos, i);
}

//call function with forEach
toDos.forEach(logToDos);
toDosImportant.forEach(logToDos);



//While Loop 0 - 9
let counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++
};
let counterTwo = 10;
while (counterTwo > 0) {
  console.log(counterTwo);
  counterTwo--
};

//DoWhile Loop 
let counterThree = 10;
do {
  console.log(counterThree);
  counterThree--;
} while (counterThree > 0);



//output array object

for (i = 0; i < objectArray.length; i++) {
  console.log(objectArray[0], i);
};