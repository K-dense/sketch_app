const gridContainer = document.querySelector('#grid-container'); // <- Main Div
let isDrawing = false; // <- To handle the "mouseover" event listener

// Logic for generating a single row
function gridRowGenerator() {
  const rowContainer = document.createElement('div');
  rowContainer.id = 'row-container';
  gridContainer.appendChild(rowContainer);

  let i = 0;
  for (i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.id = 'square';
    rowContainer.appendChild(gridSquare);
  }
  return i;
}

// Joining all rows together to form a grid
function gridGenerator(columns) {
  columns = gridRowGenerator();
  for (let i = 0; i < columns - 1; i++) {
    gridRowGenerator();
  }
}

gridGenerator();


// Event listeners
let squares = document.querySelectorAll('#row-container'); // <- Selecting row-container after it was generated by gridRowGenerator()

squares.forEach(square => {
  square.addEventListener('mousedown', event => {
    isDrawing = true;
    event.target.style.backgroundColor = "black";
  })
});

squares.forEach(square => {
  square.addEventListener('mouseover', event => {
    if (isDrawing === true) {
      event.target.style.backgroundColor = "black";
    }
  })
})

window.addEventListener('mouseup', () => {
  isDrawing = false;
});