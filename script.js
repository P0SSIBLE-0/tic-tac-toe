let btnopt = document.querySelectorAll('.btn-opt');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.getElementById('new-game');
let restartBtn = document.getElementById('restart');
let msgBox = document.getElementById('message');

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5]
]

let xTurn = true
let count = 0

const disableBtn = () => {
    btnopt.forEach(btn => { btn.disabled = true })
    popupRef.classList.remove("hide")
}

const enableBtn = () => {
    btnopt.forEach(e => {
        e.innerHTML = ""
        e.disabled = false
    })
    popupRef.classList.add("hide")
}

const winfunc = (el) => {
    disableBtn();
    if (el == "X") {
        msgBox.innerHTML = "'X' Wins"
    }
    else {
        msgBox.innerHTML = "'0' Wins"
    }
}
const drawFunc = () => {
    disableBtn()
    msgBox.innerHTML = ` It's a Draw!`
}
// New game
newgameBtn.addEventListener("click", () => {
    count = 0
    enableBtn();
})
// Restart game
restartBtn.addEventListener("click", () => {
    count = 0
    enableBtn();
})

// win pattern logic
const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnopt[i[0]].innerHTML,
            btnopt[i[1]].innerHTML,
            btnopt[i[2]].innerHTML,
        ]
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                winfunc(element1)
            }
        }
    };
}

btnopt.forEach((e) =>{
    e.addEventListener("click",()=>{
        if (xTurn) {
            xTurn = false;
            e.innerHTML = "X"
            e.disabled = true
        } else {
            xTurn = true;
            e.innerHTML = "0"
            e.disabled = true
        }
        count += 1;
        if (count == 9) {
            drawFunc();
        }
        winChecker();
    })
})
window.onload = enableBtn()