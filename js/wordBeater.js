window.addEventListener('load', init)

let level = {
    mudah: 5,
    menengah: 3,
    sulit: 1
}

let currentLevel = level.mudah

let time = currentLevel
var scoreResult = 0;
let isPlaying;

var inputKata = document.getElementById("inputKata");
var currentWord = document.getElementById("currentWord");
var scoreDisplay = document.getElementById("scoreResult")
var timeDisplay = document.getElementById("timeLeft")
var message = document.getElementById("statusCount")
var seconds = document.getElementById("seconds")
var highScoreDisplay = document.getElementById("highScore")

let words = [
    `Aberto`,
    `Accio`,
    `Ageline`,
    `Aguamenti`,
    `Anteoculatia`,
    `AvadaKedavra`,
    `Bombarda`,
    `Caterwauling`,
    `Colloportus`,
    `Defodio`,
    `Densaugeo`,
    `Dissendium`,
    `Ducklifors`
]

function init(){

    seconds.innerHTML = currentLevel

    showWord(words);

    inputKata.addEventListener('input', mulaiPermainan)

    setInterval(countdown, 1000)

    setInterval(checkStatus, 50)
}

function mulaiPermainan(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        inputKata.value = ""
        scoreResult++;
    }
}




