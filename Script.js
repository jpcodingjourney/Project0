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
let checkList1 = [];
let checkList2 = [];
let gameTurn = 0;

document.querySelectorAll(".slot").forEach((b) =>
  b.addEventListener("click", (e) => {
    let target = e.target;
    if (gameTurn === 9) {
      console.log("It's a draw!");
      return "";
    }
    if (gameTurn % 2 !== 0) {
      target.classList.add("yoshi");
    } else if (gameTurn % 2 === 0) {
      target.classList.add("mario");
    }
    // checkForWinner();
    console.log(checkList1);
    gameTurn++;
  })
);

const gameButton = document.querySelectorAll(".slot");

const marioSlot = document.querySelectorAll(".mario");
const yoshiSlot = document.querySelectorAll(".yoshi");

for (const element of marioSlot) {
  element.innerHTML.push(checkList1);
}
for (const element of yoshiSlot) {
  element.innerHTML.push(checkList2);
}
console.log(checkList1);
for (let i = 0; i < winCombo.length; i++) {
  const checkMario = checkList1.every((value) => {
    return winCombo[i].includes(value);
  });
}

for (let i = 0; i < winCombo.length; i++) {
  const checkYoshi = checkList2.every((value) => {
    return winCombo[i].includes(value);
  });
}

const checkForWinner = function () {
  if (checkMario === true) {
    alert`Player 1 won!`;
  }
  if (checkYoshi === true) {
    alert`Player 2 won!`;
  }
};

// let aaa = [1, 2, 3];
// let bbb = [2, 3, 4];
// aaa.push(...bbb);
// console.log(aaa);
// gameButton.forEach((item) => {
//   copyItems.push(item);
// });

// function gameStart(slot) {
//   let player1 = "Mario";
//   let player2 = "Yoshi";
//   gameTurn++;
//   let slotId = slot.target.id;
//   let slotEle = document.querySelector(slotId);
//   for (let i = 0; i <= gameButton.length; i++) {
//     const addA = function () {
//       gameButton[i].classList.add("a");
//     };
//     const addB = function () {
//       gameButton[i].classList.add("b");
//     };
//     if (gameTurn === 9) {
//       return "You win!";
//     }
//     if (gameTurn % 2 === 0) {
//       slotEle.innerText = player2;
//       gameButton[i].addEventListener("click", addB);
//     } else {
//       slotEle.innerText = player1;
//       gameButton[i].addEventListener("click", addA);
//     }
//   }
// }
// gameStart();

// gameButton.addEventListener("click", function (e) {

// for (let i = 0; i <= gameButton.length; i++) {
//   const addA = function () {
//     gameButton[i].classList.add("a");
//   };
//   const addB = function () {
//     gameButton[i].classList.add("b");
//   };

//   gameButton[i].addEventListener("click", addA);
//   gameButton[i].addEventListener("click", addB);
// }

//       gameButton[i].classList.add("b");
//     } else {
//       gameButton[i].classList.add("a");
//     }
//   }
// });
