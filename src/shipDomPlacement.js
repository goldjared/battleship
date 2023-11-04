const container = document.querySelector(".container");

export default function shipDomPlacement() {
  let shipLength = 0;
  const playerBoard = document.getElementById("player");
  const shipMenuGUI = document.createElement("div");
  shipMenuGUI.classList.add("ship-menu");

  // square tracer code
  const square = document.createElement("div");
  square.classList.add("mouse-tracer");
  let gameBoardSquareHeight = playerBoard.firstChild.offsetHeight;
  let gameBoardSquareWidth = playerBoard.firstChild.offsetWidth;
  const gameBoardSquareHeightDefault = gameBoardSquareHeight;

  const gameShipDataArr = [
    { name: "Carrier", length: 5 },
    { name: "Battleship", length: 4 },
    { name: "Destroyer", length: 3 },
    { name: "Submarine", length: 3 },
    { name: "Patrol Boat", length: 2 },
  ];
  // create ship selections buttons
  for (let i = 0; i <= 4; i++) {
    const shipBtn = document.createElement("button");
    shipBtn.classList.add("ship-select-btn");
    shipBtn.dataset.length = gameShipDataArr[i].length;
    shipBtn.textContent = gameShipDataArr[i].name;

    shipMenuGUI.append(shipBtn);
  }

  // shipMenuGUI.append(ship5);
  container.append(shipMenuGUI);
  // * after all 5 ship buttons is disabled, make placeshipGUI vanish. also toggle off
  // playerBoard selected class

  // listener on menu for what ship is clicked
  function shipMenuController(e) {
    if (e.target.localName === "button") {
      // disable button after clicked
      e.target.disabled = true;
      e.target.classList.add("disabled-btn");

      // need to rework this toggle, so it turns on on click 1, and off by ship place 5th ship
      playerBoard.classList.toggle("selected");
      shipLength = e.target.dataset.length;
      shipHoverMouse();
      shipMenuBtnController().temporaryDisableBtns();

      playerBoard.addEventListener("click", pBoardListener);
    }
  }
  shipMenuGUI.addEventListener("click", shipMenuController);

  function pBoardListener(e) {
    const baseCoord = e.target.dataset.coord.split(",").map(Number);
    let direction = "";
    if (gameBoardSquareHeight > gameBoardSquareWidth) {
      direction = "vertical";
      console.log(shipLength);
    } else {
      direction = "horizontal";
    }

    calculateShipArr(direction, baseCoord);
  }

  function calculateShipArr(direction, baseCoord) {
    const arrHolder = [];
    const coordLengthVal = Math.floor(shipLength / 2);
    if (direction === "vertical") {
      for (
        let i = baseCoord[0] + coordLengthVal;
        i >= baseCoord[0] - coordLengthVal;
        i--
      ) {
        if (i < 0 || i > 9) return console.log("ERROR, out of bound");

        const tempCalculatedCoord = [i, baseCoord[1]];
        arrHolder.push(tempCalculatedCoord);
      }
    } else if (direction === "horizontal") {
      for (
        let j = baseCoord[1] + coordLengthVal;
        j >= baseCoord[1] - coordLengthVal;
        j--
      ) {
        if (j < 0 || j > 9) return console.log("ERROR, out of bound");

        const tempCalculatedCoord = [baseCoord[0], j];
        arrHolder.push(tempCalculatedCoord);
      }
    }
    // remove event listeners working with ship placement gui
    disableShipHoverDisplay();
    resetGameBoardSquareHeightWidth();
    enableRightClickShipHovDisplay();

    shipMenuBtnController().unlockAvailableBtns();
    // check if all ship menu btns are disabled, remove menu if so.
    if (shipMenuBtnController().isAllDisabled()) {
      shipMenuGUI.remove();
      // can reset all buttons to enabled also.
    }
    console.log(arrHolder);
  }

  function shipMenuBtnController() {
    const shipMenuBtns = shipMenuGUI.children;
    function isAllDisabled() {
      for (let i = 0; i < shipMenuBtns.length; i++) {
        if (!shipMenuBtns[i].disabled) {
          return false;
        }
      }
      return true;
    }

    function temporaryDisableBtns() {
      for (let i = 0; i < shipMenuBtns.length; i++) {
        if (!shipMenuBtns[i].disabled) {
          shipMenuBtns[i].disabled = true;
          shipMenuBtns[i].id = "temp-disable";
        }
      }
    }

    function unlockAvailableBtns() {
      for (let i = 0; i < shipMenuBtns.length; i++) {
        if (shipMenuBtns[i].id === "temp-disable") {
          shipMenuBtns[i].disabled = false;
          shipMenuBtns[i].removeAttribute("id");
        }
      }
    }

    return { isAllDisabled, temporaryDisableBtns, unlockAvailableBtns };
  }

  function resetGameBoardSquareHeightWidth() {
    gameBoardSquareHeight = gameBoardSquareHeightDefault;
    gameBoardSquareWidth = gameBoardSquareHeightDefault;
  }

  function disableShipHoverDisplay() {
    square.style.visibility = "hidden";
    document.removeEventListener("mousemove", shipHoverDisplay);
  }

  // e page value, subtracting the l or w of game cell / by 2,
  // in order to place hover at center mouse
  function shipHoverDisplay(e) {
    square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;
    square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;
    square.style.visibility = "visible";
  }

  function enableRightClickShipHovDisplay() {
    document.removeEventListener(
      "contextmenu",
      disableRightClickShipHovDisplay
    );
  }

  // listen on document for right click, recalculate dimensions for rotation
  // (document since square has point-events style turned off)
  function disableRightClickShipHovDisplay(e) {
    e.preventDefault();
    if (gameBoardSquareHeight > gameBoardSquareWidth) {
      gameBoardSquareHeight /= shipLength;
      gameBoardSquareWidth *= shipLength;
    } else {
      gameBoardSquareHeight *= shipLength;
      gameBoardSquareWidth /= shipLength;
    }
    square.style.height = `${gameBoardSquareHeight}px`;
    square.style.width = `${gameBoardSquareWidth}px`;
    square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;
    square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;
  }

  function shipHoverMouse() {
    gameBoardSquareHeight *= shipLength;
    square.style.height = `${gameBoardSquareHeight}px`;
    square.style.width = `${gameBoardSquareWidth}px`;

    container.append(square);

    function enableContextMenu(e) {
      e.preventDefault();
      if (e.key === "Escape" || e.key === "escape") {
        //turn off mouse hover, re enable button.
      }
    }

    document.addEventListener("mousemove", shipHoverDisplay);
    document.addEventListener("contextmenu", disableRightClickShipHovDisplay);
    document.addEventListener("keydown", enableContextMenu);
  }
}
