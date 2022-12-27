const maxSlots = 9;
const body = document.body;
const marioScoreEle = document.getElementById("marioscore");
const yoshiScoreEle = document.getElementById("yoshiscore");
let marioScore = 0;
let yoshiScore = 0;
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
function moveGif(gifName) {
  // Measure the sizes of the browzer and the gif, make sure the gif stays within the screen
  const gifRect = gifName.getBoundingClientRect();
  let gifHeight = gifRect.height;
  let gifWidth = gifRect.width;
  function move() {
    // Generate random new position for the GIF
    gifName.style.top = `${Math.floor(
      Math.random() * (window.innerHeight - gifHeight)
    )}px`;
    gifName.style.left = `${Math.floor(
      Math.random() * (window.innerWidth - gifWidth)
    )}px`;
  }
  move();
}

//Add alert boxes and events for ending
const alertBox1 = document.getElementById("alertbox1");
const alertBox2 = document.getElementById("alertbox2");
const alertBox3 = document.getElementById("alertbox3");
const okButton1 = document.getElementById("okbutton1");
const okButton2 = document.getElementById("okbutton2");
const okButton3 = document.getElementById("okbutton3");
const callContainer = document.getElementById("container");
const callResetButton = document.getElementById("resetgame");
function showModal1() {
  alertBox1.style.display = "block";
  hideContainer();
  hideResetButton();
  hidegameTitle();
}

function showModal2() {
  alertBox2.style.display = "block";
  hideContainer();
  hideResetButton();
  hidegameTitle();
}

function showModal3() {
  alertBox3.style.display = "block";
  hideContainer();
  hideResetButton();
  hidegameTitle();
}

function hideModal1() {
  alertBox1.style.display = "none";
  onemoregameSound.play();
  showContainer();
  showResetButton();
  showGameTitle();
}

function hideModal2() {
  alertBox2.style.display = "none";
  onemoregameSound.play();
  showContainer();
  showResetButton();
  showGameTitle();
}

function hideModal3() {
  alertBox3.style.display = "none";
  onemoregameSound.play();
  showContainer();
  showResetButton();
  showGameTitle();
}

function hideContainer() {
  callContainer.style.display = "none";
}

function showContainer() {
  callContainer.style.display = "grid";
}

function hideResetButton() {
  callResetButton.style.display = "none";
}

function showResetButton() {
  callResetButton.style.display = "block";
}

function hidegameTitle() {
  gameTitle.style.display = "none";
}

function showGameTitle() {
  gameTitle.style.display = "block";
}

okButton1.addEventListener("click", hideModal1);
okButton2.addEventListener("click", hideModal2);
okButton3.addEventListener("click", hideModal3);

//Add sound effects
const marioSound = document.querySelector("#mariosound");
marioSound.volume = 0.3;
const yoshiSound = document.querySelector("#yoshisound");
yoshiSound.volume = 0.3;
const winSound = document.querySelector("#winsound");
winSound.volume = 0.3;
const onemoregameSound = document.querySelector("#onemoregamesound");
onemoregameSound.volume = 0.3;
const titleSound = document.querySelector("#titlesound");
titleSound.volume = 0.3;
const clickMarioSound = document.querySelector("#clickmariosound");
clickMarioSound.volume = 0.3;
const clickYoshiSound = document.querySelector("#clickyoshisound");
clickYoshiSound.volume = 0.7;
const clickResetButton = document.querySelector("#clickresetbutton");
clickResetButton.volume = 0.7;

//Do not lower the volume for drawSound as it's already low
const drawSound = document.querySelector("#drawsound");

//Click Mario and Yoshi will play sound effects
const mrMario = document.querySelector("#mrmario");
mrMario.addEventListener("click", function () {
  clickMarioSound.play();
});

const mrYoshi = document.querySelector("#mryoshi");
mrYoshi.addEventListener("click", function () {
  clickYoshiSound.play();
});

//By clicking the game title, it will play some mario music and surprise!
const gameTitle = document.getElementById("gametitle");
gameTitle.addEventListener("click", function () {
  titleSound.play();
  document.getElementById("marioicon").style.display = "flex";
  marioInterval = setInterval(moveGif, 500, marioIcon);
  document.getElementById("yoshiicon").style.display = "flex";
  yoshiInterval = setInterval(moveGif, 500, yoshiIcon);
  document.getElementById("redmushroomicon").style.display = "flex";
  redMushroomInterval = setInterval(moveGif, 500, redMushroomIcon);
  document.getElementById("greenmushroomicon").style.display = "flex";
  greenMushroomInterval = setInterval(moveGif, 500, greenMushroomIcon);
  document.getElementById("staricon").style.display = "flex";
  starInterval = setInterval(moveGif, 500, starIcon);
  document.getElementById("fireflowericon").style.display = "flex";
  fireFlowerInterval = setInterval(moveGif, 500, fireFlowerIcon);
  document.getElementById("booicon").style.display = "flex";
  booInterval = setInterval(moveGif, 500, booIcon);
  document.getElementById("bloopericon").style.display = "flex";
  blooperInterval = setInterval(moveGif, 500, blooperIcon);
  document.getElementById("lakituicon").style.display = "flex";
  lakituInterval = setInterval(moveGif, 500, lakituIcon);
  const resetInterval = setInterval(function () {
    clearInterval(marioInterval);
    clearInterval(yoshiInterval);
    clearInterval(redMushroomInterval);
    clearInterval(greenMushroomInterval);
    clearInterval(starInterval);
    clearInterval(fireFlowerInterval);
    clearInterval(booInterval);
    clearInterval(blooperInterval);
    clearInterval(lakituInterval);
    const icons = [
      "marioicon",
      "yoshiicon",
      "redmushroomicon",
      "greenmushroomicon",
      "staricon",
      "fireflowericon",
      "booicon",
      "bloopericon",
      "lakituicon",
    ].map((id) => document.getElementById(id));
    for (const icon of icons) {
      icon.style.display = "none";
    }
    clearInterval(resetInterval);
  }, 118000);
});

//Set up moving images
const marioIcon = document.getElementById("marioicon");
const yoshiIcon = document.getElementById("yoshiicon");
const redMushroomIcon = document.getElementById("redmushroomicon");
const greenMushroomIcon = document.getElementById("greenmushroomicon");
const starIcon = document.getElementById("staricon");
const fireFlowerIcon = document.getElementById("fireflowericon");
const booIcon = document.getElementById("booicon");
const blooperIcon = document.getElementById("bloopericon");
const lakituIcon = document.getElementById("lakituicon");

//Game function
const gameStart = function () {
  gameEnded = false;
  gameTurn = 1;
  marioComboCheck = [];
  yoshiComboCheck = [];
  marioScoreEle.innerText = marioScore;
  yoshiScoreEle.innerText = yoshiScore;
  marioInterval = null;
  yoshiInterval = null;
  redMushroomInterval = null;
  greenMushroomInterval = null;
  starInterval = null;
  fireFlowerInterval = null;
  booInterval = null;
  blooperInterval = null;
  lakituInterval = null;

  const icons = [
    "marioicon",
    "yoshiicon",
    "redmushroomicon",
    "greenmushroomicon",
    "staricon",
    "fireflowericon",
    "booicon",
    "bloopericon",
    "lakituicon",
  ].map((id) => document.getElementById(id));
  for (const icon of icons) {
    icon.style.display = "none";
  }

  document.querySelectorAll(".slot").forEach((slot) =>
    slot.addEventListener("click", (e) => {
      if (
        !gameEnded &&
        !slot.classList.contains("mario") &&
        !slot.classList.contains("yoshi")
      ) {
        //Check win combo
        let target = e.target;
        if (target.classList.contains("mario", "yoshi") === false) {
          if (gameTurn % 2 !== 0) {
            marioSound.play();
            target.classList.add("mario");
            marioComboCheck.push(parseInt(target.classList[1]));
          } else {
            yoshiSound.play();
            target.classList.add("yoshi");
            yoshiComboCheck.push(parseInt(target.classList[1]));
          }
          console.log(marioComboCheck);
          for (let i = 0; i < winCombo.length; i++) {
            const checkMario = winCombo[i].every((value) => {
              return marioComboCheck.includes(value);
            });
            const checkYoshi = winCombo[i].every((value) => {
              return yoshiComboCheck.includes(value);
            });
            //Check winner
            const checkForWinner = function () {
              if (checkMario && !gameEnded) {
                gameEnded = true;
                hideResetButton();
                marioScore++;
                winSound.play();
                document.getElementById("marioicon").style.display = "flex";
                marioInterval = setInterval(moveGif, 500, marioIcon);
                document.getElementById("redmushroomicon").style.display =
                  "flex";
                redMushroomInterval = setInterval(
                  moveGif,
                  500,
                  redMushroomIcon
                );
                document.getElementById("greenmushroomicon").style.display =
                  "flex";
                greenMushroomInterval = setInterval(
                  moveGif,
                  500,
                  greenMushroomIcon
                );
                document.getElementById("staricon").style.display = "flex";
                starInterval = setInterval(moveGif, 500, starIcon);
                document.getElementById("fireflowericon").style.display =
                  "flex";
                fireFlowerInterval = setInterval(moveGif, 500, fireFlowerIcon);
                const resetInterval = setInterval(function () {
                  showModal1();
                  clearInterval(resetInterval);
                  resetGame();
                }, 5500);
              }
              if (checkYoshi && !gameEnded) {
                gameEnded = true;
                hideResetButton();
                yoshiScore++;
                winSound.play();
                document.getElementById("yoshiicon").style.display = "flex";
                yoshiInterval = setInterval(moveGif, 500, yoshiIcon);
                document.getElementById("redmushroomicon").style.display =
                  "flex";
                redMushroomInterval = setInterval(
                  moveGif,
                  500,
                  redMushroomIcon
                );
                document.getElementById("greenmushroomicon").style.display =
                  "flex";
                greenMushroomInterval = setInterval(
                  moveGif,
                  500,
                  greenMushroomIcon
                );
                document.getElementById("staricon").style.display = "flex";
                starInterval = setInterval(moveGif, 500, starIcon);
                document.getElementById("fireflowericon").style.display =
                  "flex";
                fireFlowerInterval = setInterval(moveGif, 500, fireFlowerIcon);
                const resetInterval = setInterval(function () {
                  showModal2();
                  clearInterval(resetInterval);
                  resetGame();
                }, 5500);
              }
            };
            checkForWinner();
          }
          //Check draw
          if (gameTurn === maxSlots && !gameEnded) {
            gameEnded = true;
            hideResetButton();
            drawSound.play();
            document.getElementById("marioicon").style.display = "flex";
            marioInterval = setInterval(moveGif, 500, marioIcon);
            document.getElementById("yoshiicon").style.display = "flex";
            yoshiInterval = setInterval(moveGif, 500, yoshiIcon);
            document.getElementById("redmushroomicon").style.display = "flex";
            redMushroomInterval = setInterval(moveGif, 500, redMushroomIcon);
            document.getElementById("greenmushroomicon").style.display = "flex";
            greenMushroomInterval = setInterval(
              moveGif,
              500,
              greenMushroomIcon
            );
            document.getElementById("staricon").style.display = "flex";
            starInterval = setInterval(moveGif, 500, starIcon);
            document.getElementById("fireflowericon").style.display = "flex";
            fireFlowerInterval = setInterval(moveGif, 500, fireFlowerIcon);
            const resetInterval = setInterval(function () {
              showModal3();
              clearInterval(resetInterval);
              resetGame();
            }, 7500);
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

//Reset function
function resetGame() {
  gameEnded = true;
  let slots = document.querySelectorAll(".slot");
  for (let i = 0; i < maxSlots; i++) {
    let slot = slots[i];
    slot.classList.remove("mario");
    slot.classList.remove("yoshi");
  }
  gameStart();
  titleSound.pause();
}

document.querySelector("#resetgame").onclick = function () {
  clickResetButton.play();
  resetGame();
};
