let body = document.querySelector("body");
let h3 = document.querySelector("h3");

let btnsArr = ["red", "yellow", "green", "blue"];

let start = false;
let level = 0;
body.addEventListener("keypress", function () {
    if (start == false) {
        start = true;

        levelUp();
    }

})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}

function levelUp() {
    level += 1;
    h3.innerText = (`Level ${level}`);
    let idx = Math.floor(Math.random() * 3);
    let color = btnsArr[idx];
    let btn = document.querySelector(`.${color}`);
    btnFlash(btn);
}

function btnPress() {
    console.log(`${this} Button Pressed`);
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}