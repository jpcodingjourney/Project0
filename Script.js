const maxSlots = 9;
const body = document.body;
const winCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const marioIcon = document.getElementById("marioicon");
const yoshiIcon = document.getElementById("yoshiicon");
function moveGif(gifName) {
  // Measure the sizes of the brower and the gif, make sure the gif stays within the screen
  const gifRect = gifName.getBoundingClientRect();
  let gifHeight = gifRect.height;
  let gifWidth = gifRect.width;
  //Set the number of times the img should move
  const counterLimit = 10;
  let moveCounter = 0;
  function move() {
    // Generate random new position for the GIF
    gifName.style.top = `${Math.floor(
      Math.random() * (window.innerHeight - gifHeight)
    )}px`;
    gifName.style.left = `${Math.floor(
      Math.random() * (window.innerWidth - gifWidth)
    )}px`;
    moveCounter++;
    if (moveCounter < counterLimit) {
      setTimeout(move, 500);
    }
  }
  move();
}
const gameStart = function () {
  let marioComboCheck = [];
  let yoshiComboCheck = [];
  let gameTurn = 1;
  let gameEnded = false;
  marioInterval = null;
  yoshiInterval = null;
  document.querySelectorAll(".slot").forEach((slot) =>
    slot.addEventListener("click", (e) => {
      if (
        !gameEnded &&
        !slot.classList.contains("mario") &&
        !slot.classList.contains("yoshi")
      ) {
        let target = e.target;
        if (target.classList.contains("mario", "yoshi") === false) {
          if (gameTurn % 2 !== 0) {
            target.classList.add("mario");
            marioComboCheck.push(parseInt(target.classList[1]));
          } else {
            target.classList.add("yoshi");
            yoshiComboCheck.push(parseInt(target.classList[1]));
          }
          for (let i = 0; i < winCombo.length; i++) {
            const checkMario = winCombo[i].every((value) => {
              return marioComboCheck.includes(value);
            });
            const checkYoshi = winCombo[i].every((value) => {
              return yoshiComboCheck.includes(value);
            });
            const checkForWinner = function () {
              if (checkMario && !gameEnded) {
                gameEnded = true;
                document.getElementById("marioicon").style.display = "flex";
                marioInterval = setInterval(moveGif, 500, marioIcon);
                const resetInterval = setInterval(function () {
                  alert("Player 1 won! Let's play again!");
                  resetGame();
                  clearInterval(resetInterval);
                }, 5100);
              }
              if (checkYoshi && !gameEnded) {
                gameEnded = true;
                document.getElementById("yoshiicon").style.display = "flex";
                yoshiInterval = setInterval(moveGif, 500, yoshiIcon);
                const resetInterval = setInterval(function () {
                  alert("Player 2 won! Let's play again!");
                  resetGame();
                  clearInterval(resetInterval);
                }, 5100);
              }
            };
            checkForWinner();
          }
          if (gameTurn === maxSlots && !gameEnded) {
            gameEnded = true;
            document.getElementById("marioicon").style.display = "flex";
            marioInterval = setInterval(moveGif, 500, marioIcon);
            document.getElementById("yoshiicon").style.display = "flex";
            yoshiInterval = setInterval(moveGif, 500, yoshiIcon);
            const resetInterval = setInterval(function () {
              alert("It's a draw! Let's play again!");
              resetGame();
              clearInterval(resetInterval);
            }, 5100);
          }
        } else {
          e.stopPropagation();
        }
        gameTurn++;
      }
    })
  );
};
gameStart();

const resetGame = function () {
  gameEnded = true;
  marioComboCheck = [];
  yoshiComboCheck = [];
  gameTurn = 1;
  clearInterval(marioInterval);
  clearInterval(yoshiInterval);
  document.querySelectorAll(".slot").forEach((slot) => {
    slot.classList.remove("mario");
    slot.classList.remove("yoshi");
  });
  document.getElementById("marioicon").style.display = "none";
  document.getElementById("yoshiicon").style.display = "none";
  gameStart();
};

const resetButton = function () {
  window.location.reload();
};
document.querySelector(".reset-game").onclick = resetButton;
