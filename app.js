let userSeq = [];
let gameSeq = [];

let body = document.querySelector("body");
let h2 = document.querySelector("h2");

let btnsArr = ["red", "yellow", "green", "blue"];

let start = false;
let score = -1;
body.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        scoreUp();
    }

})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}

function scoreUp() {
    userSeq = [];
    score += 1;
    h2.innerText = (`Score ${score}`);
    let idx = Math.floor(Math.random() * 3);
    let color = btnsArr[idx];
    gameSeq.push(color);
    console.log(gameSeq);
    let btn = document.querySelector(`.${color}`);
    btnFlash(btn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkColors(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function checkColors(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(scoreUp, 1000);
        }

    }
    else {
        h2.innerText = `Game Over! Total Score ${score}. \n Press Any Key to Start.`;
        reset();
        body.classList.add("finishGame");
        setTimeout(function () {
            body.classList.remove("finishGame")
        }, 50)
    }
}

function reset() {
    start = false;
    userSeq = [];
    gameSeq = [];
    score = 0;
}