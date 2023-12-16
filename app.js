const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const startButton = document.getElementById("startButton");
const tryAgainButton = document.getElementById("tryAgainButton");
const buttonDiv = document.getAnimations("buttonDiv");
const gameDiv = document.getElementById("game");
let isJumping = false;
let score = 0;

startButton.addEventListener("click", startGame);
tryAgainButton.addEventListener("click", tryAgain);

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(dog).getPropertyValue("left"));

    if (blockLeft < 25 && blockLeft > -25 && characterTop >= 150) {
        tryAgainButton.style.display = "block";
        gameDiv.style.display = "none";

        clearInterval(intervalId);

        alert("Game over. Your score is: " + score);
    }
}

function startGame() {
    startButton.style.display = "none";
    tryAgainButton.style.display = "none";
    gameDiv.style.display = "block";

    cat.style.top = "150px";
    dog.style.left = "480px";
    dog.style.animationDuration = "1.5s";

    score = 0;

    document.addEventListener("click", jump);
    intervalId = setInterval(checkDead, 5);
}

function tryAgain() {
    tryAgainButton.style.display = "none";
    startGame();
}

function incrementScore() {
    score++;
}

function jump() {
    if (!isJumping) {
        isJumping = true;
        cat.classList.add("animate");
        setTimeout(function () {
            cat.classList.remove("animate");
            isJumping = false;
            incrementScore();
        }, 300);
    }
}



