const drawingGridDiv = document.getElementById("drawing-grid");
const sizeSlider = document.getElementById("grid-size-slider");
const sizeLabel = document.getElementById("grid-size-label");
const warmColorsButton = document.getElementById("warm-colors");
const coldColorsButton = document.getElementById("cold-colors");
const neonColorsButton = document.getElementById("neon-colors");
const eraserButton = document.getElementById("eraser-button");
const resetButton = document.getElementById("reset");
const toggleTilesButton = document.getElementById("toggle-tiles");
const DRAWING_GRID_WIDTH = parseInt(getComputedStyle(drawingGridDiv).width);
const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE = 50;

const WARM_COLORS = [
  "ede0d4",
  "e6ccb2",
  "ddb892",
  "b08968",
  "7f5539",
  "9c6644",
];

const COLD_COLORS = [
  "0466C8",
  "0353A4",
  "023E7D",
  "002855",
  "001845",
  "001233",
];

const NEON_COLORS = [
  "9b5de5",
  "f15bb5",
  "fee440",
  "00bbf9",
  "00f5d4",
  "fb5607",
];

let gridSize = MIN_GRID_SIZE;
let tiles = true;
let warmColorsToggle = false;
let coldColorsToggle = false;
let neonColorsToggle = false;
let eraserToggle = false;

function drawColor() {
  this.style.backgroundColor = "black";

  if (warmColorsToggle) {
    this.style.backgroundColor =
      "#" + WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)];
  } else if (coldColorsToggle) {
    this.style.backgroundColor =
      "#" + COLD_COLORS[Math.floor(Math.random() * COLD_COLORS.length)];
  } else if (neonColorsToggle) {
    this.style.backgroundColor =
      "#" + NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
  } else if (eraserToggle) {
    this.style.backgroundColor = "white";
  }
}

function toggleColorButton() {
  if (warmColorsToggle) {
    warmColorsButton.style.backgroundColor = "hsl(317 100% 54%)";
    warmColorsButton.style.color = "white";
  } else {
    warmColorsButton.style.backgroundColor = "white";
    warmColorsButton.style.color = "hsl(317 100% 54%)";
  }

  if (coldColorsToggle) {
    coldColorsButton.style.backgroundColor = "hsl(317 100% 54%)";
    coldColorsButton.style.color = "white";
  } else {
    coldColorsButton.style.backgroundColor = "white";
    coldColorsButton.style.color = "hsl(317 100% 54%)";
  }

  if (neonColorsToggle) {
    neonColorsButton.style.backgroundColor = "hsl(317 100% 54%)";
    neonColorsButton.style.color = "white";
  } else {
    neonColorsButton.style.backgroundColor = "white";
    neonColorsButton.style.color = "hsl(317 100% 54%)";
  }

  if (eraserToggle) {
    eraserButton.style.backgroundColor = "hsl(317 100% 54%)";
    eraserButton.style.color = "white";
  } else {
    eraserButton.style.backgroundColor = "white";
    eraserButton.style.color = "hsl(317 100% 54%)";
  }
}

function toggleTiles() {
  if (tiles) {
    toggleTilesButton.style.backgroundColor = "hsl(317 100% 54%)";
    toggleTilesButton.style.color = "white";
    for (const divTile of drawingGridDiv.children) {
      divTile.style.border = "1px solid lightgray";
    }
  } else {
    toggleTilesButton.style.backgroundColor = "white";
    toggleTilesButton.style.color = "hsl(317 100% 54%)";
    for (const divTile of drawingGridDiv.children) {
      divTile.style.border = "";
    }
  }
}

function initDrawingGrid() {
  let squareSize = DRAWING_GRID_WIDTH / gridSize;

  drawingGridDiv.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let blankSquare = document.createElement("div");
      blankSquare.style.backgroundColor = "white";
      blankSquare.style.width = squareSize - 0.1 + "px";
      blankSquare.style.height = squareSize - 0.1 + "px";
      blankSquare.className = "tile";
      blankSquare.style.borderRadius = squareSize / 10 + "px";

      blankSquare.addEventListener("mouseover", drawColor, false);

      drawingGridDiv.appendChild(blankSquare);
    }
  }
  toggleTiles();
}

function updateGridSize() {
  gridSize = parseInt(this.value);
  initDrawingGrid();
}

function resetGrid() {
  initDrawingGrid();
}

function main() {
  sizeSlider.value = 0;
  initDrawingGrid();

  sizeSlider.addEventListener("input", updateGridSize, false);
  toggleTilesButton.addEventListener(
    "click",
    function () {
      tiles = !tiles;
      toggleTiles();
    },
    false
  );
  resetButton.addEventListener("click", resetGrid, false);

  // COLOR BUTTONS
  warmColorsButton.addEventListener(
    "click",
    function () {
      warmColorsToggle = !warmColorsToggle;
      coldColorsToggle = false;
      neonColorsToggle = false;
      eraserToggle = false;
      toggleColorButton();
      drawColor();
    },
    false
  );
  coldColorsButton.addEventListener(
    "click",
    function () {
      coldColorsToggle = !coldColorsToggle;
      warmColorsToggle = false;
      neonColorsToggle = false;
      eraserToggle = false;
      toggleColorButton();
      drawColor();
    },
    false
  );
  neonColorsButton.addEventListener(
    "click",
    function () {
      neonColorsToggle = !neonColorsToggle;
      warmColorsToggle = false;
      coldColorsToggle = false;
      eraserToggle = false;
      toggleColorButton();
      drawColor();
    },
    false
  );
  eraserButton.addEventListener(
    "click",
    function () {
      eraserToggle = !eraserToggle;
      neonColorsToggle = false;
      warmColorsToggle = false;
      coldColorsToggle = false;
      toggleColorButton();
      drawColor();
    },
    false
  );
}

main();
