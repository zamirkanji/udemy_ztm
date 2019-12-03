// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function() {
//   console.log("Click!");
// });

let button = document.querySelector("#enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

button.addEventListener("click", function() {
  if (inputLength > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});

input.addEventListener("keypress", function(event) {
  if (inputLength > 0 && event.keyCode === 13) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
});
