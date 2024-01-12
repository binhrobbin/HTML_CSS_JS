let board;
let score = 0
let rows = 4
let columns = 4
window.onload = function () {
    setGame();
}

function reset() {
    // Xóa các phần tử (tiles) trong bảng
    let boardElement = document.getElementById("board");
    while (boardElement.firstChild) {
        boardElement.firstChild.remove();
    }

    // Thiết lập lại giá trị ban đầu cho board và score
    setGame()


}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (r = 0; r < rows; r++) {
        for (c = 0; c < columns; c++) {
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    score = 0
    document.getElementById("score").innerText = score
    setTwo()


}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add('tile');
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x" + num.toString());
        } else {
            tile.classList.add("x8192")
        }
    }

}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) {
                return true;
            }
        }
    }
    return false;
}

function getRandomNumber() {
    let randomNumber = Math.random()
    let probaility = 0.5;
    let number = randomNumber < probaility ? 2 : 4;
    return number
}

function setTwo() {
    if (!hasEmptyTile()) {
        return
    }
    let found = false;
    while (!found) {
        let x = getRandomNumber()
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = x;
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            tile.innerText = x
            tile.classList.add("x" + x)
            found = true;
        }
    }
}


document.addEventListener("keydown", (e) => {

    if (e.code == "ArrowLeft") {
        moveAudio.currentTime = 0.2; // Set the current time to start from the beginning
        moveAudio.play();
        slideLeft();
        setTwo();
        checkLose()

    } else if (e.code == "ArrowRight") {
        moveAudio.currentTime = 0.2; // Set the current time to start from the beginning
        moveAudio.play();
        slideRight();
        setTwo();
        checkLose()


    } else if (e.code == "ArrowUp") {
        moveAudio.currentTime = 0.2; // Set the current time to start from the beginning
        moveAudio.play();
        slideUp();
        setTwo();
        checkLose()


    } else if (e.code == "ArrowDown") {
        moveAudio.currentTime = 0.2; // Set the current time to start from the beginning
        moveAudio.play();
        slideDown()
        setTwo();
        checkLose()


    }
    document.getElementById("score").innerText = score
})

function filterZero(row) {
    return row.filter(num => num !== 0)
}

function slide(row) {
    //Lọc các phần tử mang giá trị 0 trong mảng
    row = filterZero(row);
//đặt điều kiện để tăng giá trị từng tile
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i]
        }
    }
    row = filterZero(row);
//thêm lại 0 vào mảng row để đủ phần tử
    while (row.length < columns) {
        row.push(0);
    }
    return row; //[ 2,0,2,0 ] ---> [2,2] --->[4,0] -->[4] ---> [4,0,0,0]
}

function slideLeft() {
    for (let i = 0; i < board.length; i++) {
        moveHistory[i] = board[i].slice()
    }
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row)
        board[r] = row
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }

}

function slideRight() {
    for (let i = 0; i < board.length; i++) {
        moveHistory[i] = board[i].slice()
    }
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse()
        row = slide(row)
        row.reverse()
        board[r] = row

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideUp() {
    for (let i = 0; i < board.length; i++) {
        moveHistory[i] = board[i].slice()
    }
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]]
        row = slide(row);
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

function slideDown() {
    for (let i = 0; i < board.length; i++) {
        moveHistory[i] = board[i].slice()
    }
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]]
        row.reverse()
        row = slide(row);
        row.reverse()
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}


function checkLose() {
    let isLose = true
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === 0) {
                isLose = false
            }
            if (c != 3) {
                if (board[r][c] === board[r][c + 1]) {
                    isLose = false
                }
            }
            if (r != 3) {
                if (board[r][c] === board[r + 1][c]) {
                    isLose = false
                }
            }

        }
    }

    if (isLose) {
        loseAudio.play()
        let playerName = prompt("input your name");
        let player = new Player(playerName, score);

        let rankList = JSON.parse(localStorage.getItem("player"))

        if (rankList == null) {
            rankList = []
        }

        rankList.push(player);

        rankList.sort(function (a, b) {
            return (b.lastScore - a.lastScore)
        })

        localStorage.setItem('player', JSON.stringify(rankList))

        let text = 'RANKING'
        let z = 1
        for (let i = 0; i < rankList.length; i++) {
            if (z > 3) {
                break
            }
            text += "<p> Top " + (i + 1) + ": " + rankList[i].playerName + ": " + rankList[i].lastScore + "</p>"
            z++
        }
        console.log(rankList)
        document.getElementById("result").innerHTML = text
    }
}

class Player {
    playerName;
    lastScore

    constructor(playerName, lastScore) {
        this.playerName = playerName
        this.lastScore = lastScore
    }
}

let moveHistory = []

function undoMove() {
    for (let i = 0; i < board.length; i++) {
        board[i] = moveHistory[i].slice()
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString())
            let num = board[r][c]
            updateTile(tile, num)
        }
    }
}

let moveAudio = new Audio("sci-fi-glitch-sound-105730.mp3")
let loseAudio = new Audio("videogame-death-sound-43894.mp3")
let isMuted = false

function mute() {
    if (!isMuted) {
        moveAudio.volume = 0
        loseAudio.volume = 0
        document.getElementById("audioControler").innerHTML = "Unmute"
        isMuted = true
    }
}

function unmute() {
    if (isMuted) {
        moveAudio.volume = 1
        loseAudio.volume = 1
        document.getElementById("audioControler").innerHTML = "Mute"
        isMuted = false
    }
}
function audioController() {
    if (isMuted === false) {
        mute()
    } else if (isMuted === true) {
        unmute()
    }
}