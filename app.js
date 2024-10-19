// let userSeq = [];
// let gameSeq = [];

// let body = document.querySelector("body");
// let h2 = document.querySelector("h2");
// let level = document.querySelector(".level");

// let btnsArr = ["red", "yellow", "green", "blue"];

// let start = false;
// let score = -1;
// let levelNum = -1;
// body.addEventListener("keypress", function () {
//     if (start == false) {
//         start = true;
//         scoreUp();
//     }

// })

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash")
//     }, 250)
// }

// function scoreUp() {
//     userSeq = [];
//     score += 1;
//     h2.innerText = (`Score ${score}`);
//     let idx = Math.floor(Math.random() * 4);
//     let color = btnsArr[idx];
//     gameSeq.push(color);
//     console.log(gameSeq);
//     let btn = document.querySelector(`.${color}`);
//     btnFlash(btn);
//     levelUp();
// }

// function btnPress() {
//     let btn = this;
//     btnFlash(btn);

//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkColors(userSeq.length - 1);

// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress)
// }

// function checkColors(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(scoreUp, 1000);
//         }

//     }
//     else {
//         h2.innerText = `Game Over! Total Score ${score}. \n Press Any Key to Start.`;
//         reset();
//         body.classList.add("finishGame");
//         setTimeout(function () {
//             body.classList.remove("finishGame")
//         }, 50)
//     }
// }

// function levelUp() {
//     if (score == 0) {
//         level.innerText = `Level ${levelNum += 1}`;
//     }
//     else if (score > 0 && score <= 5) {
//         level.innerText = `Level ${levelNum += 1}`;
//     }
//     else if (score > 5 && score <= 15) {
//         level.innerText = `Level ${levelNum += 1}`;
//     }
//     else if (score > 15 && score <= 30) {
//         level.innerText = `Level ${levelNum += 1}`;
//     }
//     else if (score > 30 && score <= 50) {
//         level.innerText = `Level ${levelNum += 1}`;
//     }
//     else if (score > 75) {
//         h2.innerText = `Contgratulation! You Won the Game \n With Highese Score ${score}`;
//     }
// }

// function reset() {
//     start = false;
//     userSeq = [];
//     gameSeq = [];
//     score = 0;
//     levelNum = 0;

// }

















let userSeq = [];
let gameSeq = [];

let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let level = document.querySelector(".level");

let btnsArr = ["red", "yellow", "green", "blue"];

let start = false;
let score = -1;
let levelNum = 0;  // Start at level 0
let finalScore = 0;

body.addEventListener("keypress", function () {
    if (!start) {
        start = true;
        scoreUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function scoreUp() {
    userSeq = [];
    score++;
    h2.innerText = `Score: ${score}`;
    
    let idx = Math.floor(Math.random() * 4);
    let color = btnsArr[idx];
    gameSeq.push(color);
    console.log(gameSeq);
    
    let btn = document.querySelector(`.${color}`);
    btnFlash(btn);
    
    levelUp();
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkColors(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkColors(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(scoreUp, 1000);
        }
    } else {
        finalScore = score;  // Store final score before reset
        h2.innerText = `Game Over! Total Score: ${finalScore}. \nPress Any Key to Start.`;
        reset();
        body.classList.add("finishGame");
        setTimeout(function () {
            body.classList.remove("finishGame");
        }, 50);
    }
}

function levelUp() {
    levelNum++;  // Always increment level
    level.innerText = `Level: ${levelNum}`;
    
    if (score >= 75) {
        h2.innerText = `Congratulations! You won the game with the highest score of ${score}`;
        reset();
    }
}

function reset() {
    start = false;
    userSeq = [];
    gameSeq = [];
    score = -1;  // Reset to -1 so the first score is 0 after restarting
    levelNum = 0;
}
