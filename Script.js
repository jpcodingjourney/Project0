//two bugs: 9th step win shows draw

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
let marioComboCheck = [];
let yoshiComboCheck = [];
let gameTurn = 1;
const gameStart = function () {
  document.querySelectorAll(".slot").forEach((b) =>
    b.addEventListener("click", (e) => {
      let target = e.target;
      if (
        target.classList.contains("mario") === false &&
        target.classList.contains("yoshi") === false
      ) {
        if (gameTurn % 2 !== 0) {
          target.classList.add("mario");
          const marioSlot = document.querySelectorAll(".mario");
          for (let i = 0; i < marioSlot.length; i++) {
            marioComboCheck.push(parseInt(marioSlot[i].classList[1]));
          }
        }
        if (gameTurn % 2 === 0) {
          target.classList.add("yoshi");
          const yoshiSlot = document.querySelectorAll(".yoshi");
          for (let i = 0; i < yoshiSlot.length; i++) {
            yoshiComboCheck.push(parseInt(yoshiSlot[i].classList[1]));
          }
        }
        for (let i = 0; i < winCombo.length; i++) {
          const checkMario = winCombo[i].every((value) => {
            return marioComboCheck.includes(value);
          });
          const checkYoshi = winCombo[i].every((value) => {
            return yoshiComboCheck.includes(value);
          });

          const checkForWinner = function () {
            if (checkMario === true) {
              setTimeout(function () {
                alert("Player 1 won! Let's play again!");
                window.location.reload(true);
                return;
              }, 1);
            }
            if (checkYoshi === true) {
              setTimeout(function () {
                alert("Player 2 won! Let's play again!");
              }, 1);
              window.location.reload(true);
              return;
            }
          };
          checkForWinner();
          if (gameTurn === 9 && checkMario === false && checkYoshi === false) {
            setTimeout(function () {
              alert("It's a draw! Let's play again!");
            }, 1);
            window.location.reload(true);
            return;
          }
        }
        gameTurn++;
      } else {
        window.removeEventListener("click", null);
      }
    })
  );
};
gameStart();

const resetButton = document.querySelector(".reset-game");
resetButton.addEventListener("click", function () {
  window.location.reload(true);
});

//   target.classList.contains("mario") === false &&
//   target.classList.contains("yoshi") === false
// ) {

// checkForWinner();

// const gameButton = document.querySelectorAll(".slot");

// const marioSlot = document.querySelectorAll(".mario");
// let copyMarioSlot = JSON.parse(JSON.stringify(marioSlot));
// const yoshiSlot = document.querySelectorAll(".yoshi");

// for (const element of marioSlot) {
//   element.push(checkList1);
// }

// for (const element of yoshiSlot) {
//   element.push(checkList2);
// }
// // for (let i = 0; i < winCombo.length; i++) {
// const checkMario = winCombo[0].every((value) => {
//   return checkList1.includes(value);
// });

// // for (let i = 0; i < winCombo.length; i++) {
// const checkYoshi = winCombo[0].every((value) => {
//   return checkList2.includes(value);
// });

// const checkForWinner = function () {
//   if (checkMario === true) {
//     alert("Player 1 won!");
//   }
//   if (checkYoshi === true) {
//     alert("Player 2 won!");
//   }
// };
// let aaa = [1, 2, 3];
// let bbb = [2, 3, 4];
// aaa.push(...bbb);
// console.log(aaa);
// gameButton.forEach((item) => {
//   copyItems.push(item);
// });

// const test1 = ["div.sds.1d"];
// const num1 = test1[0].substring(8, 10);
// console.log(num1);

// result = test1.includes(1);
// console.log(result);

// const test2 = winCombo[0].every((value) => {
//   return test1.includes(value);
// });
// console.log(test2);
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
