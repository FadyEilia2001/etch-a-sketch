//Dom Elements
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset");
const colorPicker = document.querySelector("#color");

//variables
let currentColor = "#f03c7b";

for (let i = 0; i < 875; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cell");
  newDiv.id = `cell${i}`;
  gridContainer.appendChild(newDiv);
}

//Find out the color picker value and add it to a variable
colorPicker.addEventListener("input", (e) => {
  currentColor = colorPicker.value;
});

gridContainer.addEventListener("click", (event) => {
  if (event.target.id === "grid-container") {
    return;
  }

  //if event.target.style.back === current color
  event.target.style.background = currentColor;
});

// reset grid
resetButton.addEventListener("click", (e) => {
  //find out all the cell divs
  //change background color to none
  let cells = Array.from(gridContainer.children);
  for (let i = 0; i < cells.length; i++) {
    gridContainer.children[i].style.background = "";
  }
});
