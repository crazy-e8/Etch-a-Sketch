const drawingGridDiv = document.getElementById("drawing-grid");
const sizeSlider = document.getElementById("grid-size-slider");
const sizeLabel = document.getElementById("grid-size-label");
const toggleTilesButton = document.getElementById("toggle-tiles");
const DRAWING_GRID_WIDTH = parseInt(getComputedStyle(drawingGridDiv).width);
const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE = 50;

let gridSize = MIN_GRID_SIZE;
let tiles = false;

function toggleTiles() {
  tiles = !tiles;

  if (tiles) {
    toggleTilesButton.style.backgroundColor = "hsl(317 100% 54%)";
    toggleTilesButton.style.color = "white";
  } else {
    toggleTilesButton.style.backgroundColor = "white";
    toggleTilesButton.style.color = "hsl(317 100% 54%)";
  }
  initDrawingGrid();
}

function initDrawingGrid() {
  let squareSize = DRAWING_GRID_WIDTH / gridSize;
  console.log(squareSize);

  drawingGridDiv.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let blankSquare = document.createElement("div");
      blankSquare.style.backgroundColor = "white";
      blankSquare.style.width = squareSize - 0.1 + "px";
      blankSquare.style.height = squareSize - 0.1 + "px";
      if (tiles) blankSquare.style.border = "1px solid lightgray";
      drawingGridDiv.appendChild(blankSquare);
    }
  }
}

function updateGridSize() {
  gridSize = parseInt(this.value);
  initDrawingGrid();
}

sizeSlider.value = 0;
initDrawingGrid();

sizeSlider.addEventListener("input", updateGridSize, false);
toggleTilesButton.addEventListener("click", toggleTiles, false);
