const drawingGridDiv = document.getElementById("drawing-grid");
const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE = 50;
console.log(drawingGridDiv.style);
const DRAWING_GRID_WIDTH = parseInt(getComputedStyle(drawingGridDiv).width);

let gridSize = MIN_GRID_SIZE;

function initDrawingGrid() {
  let squareSize = DRAWING_GRID_WIDTH / gridSize;
  console.log(squareSize);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let blankSquare = document.createElement("div");
      blankSquare.style.backgroundColor = "white";
      blankSquare.style.width = squareSize.toString() + "px";
      blankSquare.style.height = squareSize.toString() + "px";
      drawingGridDiv.appendChild(blankSquare);
    }
  }
}

initDrawingGrid();
