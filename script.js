const gridContainer = document.querySelector('#grid-container');
let isDrawing = false;

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

function gridGenerator(columns) {
  columns = gridRowGenerator();
  for (let i = 0; i < columns - 1; i++) {
    gridRowGenerator();
  }
}

gridGenerator();

let squares = document.querySelectorAll('#row-container');

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