let canvas = document.getElementById('gamezone');
let ctx = canvas.getContext('2d');
let birdImg = new Image();
let birdTop = new Image();
let birdBot = new Image();
let backGround = new Image();
let pipeTop = new Image();
let pipeBot = new  Image();
let underGround = new  Image();
birdImg.src = 'images/bird.png';
birdTop.src = 'images/birdTop.png';
birdBot.src = 'images/birdBot.png';
backGround.src = 'images/nenchinh.png';
pipeTop.src = 'images/ongtren.png';
pipeBot.src = 'images/ongduoi.png';
underGround.src = 'images/matnen2.png';

let spacePipes = 180;
let spaceToPipeBot;
let birdOJ = {
    x: backGround.width/3,
    y: backGround.height/2
}
let score = 0;
let highScore = 0;
let pipeOJ = [];
let speed = 0;
let a = 0;
function birdSpeed(){
    speed =4
    a = 0
}
function drawBird(){
    switch (a){
        case 0: ctx.drawImage(birdImg,birdOJ.x,birdOJ.y);
            break;
        case 1: ctx.drawImage(birdTop,birdOJ.x,birdOJ.y);
            break;
        case 2: ctx.drawImage(birdBot,birdOJ.x,birdOJ.y);
            break;
    }
}
document.addEventListener('keydown',function(){
    if (count === 0){
        count ++
        game= 'running';
        pipeOJ.splice(1)
        pipeOJ[0]={x:canvas.width, y:0}
        birdOJ.x = backGround.width/3
        birdOJ.y = backGround.height/2
        score = 0;
        run()
    }else {
        speed = -12
        a = 1
        setTimeout(birdSpeed, 140)
    }
})

let game= 'waiting';
let count = 0;
let speed2 = 6;
// let b = 2;
run()
function waiting(){
    if (game === 'waiting') {
        ctx.drawImage(backGround, 0, 0);
        drawBird()
        ctx.drawImage(underGround, 0, backGround.height - 3);
        // drawGround()
        ctx.font = '50px Arial';
        ctx.fillStyle = "#FFFF00"
        ctx.shadowBlur = 10;
        ctx.fontWeight = 900;
        ctx.fillText('Press any key', 170, 150);
        ctx.fillText("to start !", 240, 200);
        // ctx.strokeText("Press any key", 170, 150);
        setTimeout(waiting, 1)
    }
}
function ending(){
    ctx.font = '50px Arial';
    ctx.fillStyle = "#FFFF00"
    ctx.shadowBlur = 10;
    ctx.fontWeight = 900;
    ctx.fillText("High score: " + highScore, 510, 50);
    ctx.strokeText("High score: " + highScore, 510, 50);
    ctx.fillText("Your score: " + score, 510, 120);
    ctx.strokeText("Your score: " + score, 510, 120);
    ctx.fillText("GAME OVER", 500, 250);
    ctx.strokeText("GAME OVER", 500, 250);
    ctx.fillStyle = "black"
    ctx.strokeText("PLAY AGAIN", 510, 200);
    ctx.fillText("PLAY AGAIN", 510, 200);
    ctx.strokeRect(510,155,300,50);
}

function run(){
    if (game === 'waiting' ){
        waiting()
    }
    if (game === 'ending' ){
        ending()
    }
    if (game === 'running' ){
        ctx.drawImage(backGround, 0, 0);
        // ctx.drawImage(underGround, 0, backGround.height - 3);
        drawBird()
        for (let i = 0; i < pipeOJ.length; i++) {
            spaceToPipeBot = pipeTop.height + spacePipes;
            ctx.drawImage(pipeTop, pipeOJ[i].x, pipeOJ[i].y);
            ctx.drawImage(pipeBot, pipeOJ[i].x, pipeOJ[i].y + spaceToPipeBot);
            // drawGround()
            ctx.drawImage(underGround, 0, backGround.height - 3);
            pipeOJ[i].x -= speed2;
            if (pipeOJ[i].x === canvas.width / 2) {
                pipeOJ.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeTop.height) - pipeTop.height
                })
            }
            if (pipeOJ[i].x === -pipeTop.width) pipeOJ.splice(0, 1);
            if (pipeOJ[i].x === birdOJ.x) {
                score++;
                if (score === 10){
                    speed2 = 10}
                if (score>highScore){highScore= score}
            }
            if (birdOJ.y + birdImg.height === backGround.height - 2 ||
                birdOJ.x + birdImg.width >= pipeOJ[i].x && birdOJ.x <= pipeOJ[i].x + pipeTop.width
                && (birdOJ.y <= pipeOJ[i].y + pipeTop.height || birdOJ.y + birdImg.height >= pipeOJ[i].y + spaceToPipeBot)
            ) {
                game = 'ending';
                count = 0;
                speed2 = 6
                ending()
                return;
            }
        }

        ctx.font = '50px Arial'
        ctx.fillStyle = "#FDEEF4"
        ctx.fillText(score, 30, 50)
        ctx.font = '20px Arial'
        ctx.fillText('HighScore: '+highScore, 30, 570)
        birdOJ.y += speed;
        if (score >= 10){
            ctx.font = '40px Arial'
            ctx.fillStyle = "#FDEEF4"
            ctx.fillText('lv2', 800, 50)
        }
        requestAnimationFrame(run)
    }
}
