// let button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function () {
//   console.log("click");
// })

let input = document.getElementById("input");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnter(e) {
  // console.log(e);
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)