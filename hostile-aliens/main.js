const buttonGame = document.getElementById("button");



function buttonClicked () {
    buttonGame.addEventListener("click",(event) => {
        let randomNumber = ((Math.floor(Math.random() * 14)) + 1);
        if (randomNumber === 1) {
            console.log("Mothership");
            console.log(motherShip.reduceScore());
            } else if (randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6) {
                console.log("Defence ship");
                console.log(defenceShip.reduceScore());
            } else {
                console.log("Attack ship");
                console.log(attackShip.reduceScore());
            }

    })
}

class Alien {
    constructor(name, score, minusPoints) {
        this.name = name;
        this.score = score;
        this.minusPoints = minusPoints;
    }
    reduceScore() {
        return (this.score -= this.minusPoints)
        
    }
}

const motherShip = new Alien ("Mothership", 100, 9);
const defenceShip = new Alien ("DefenceShip", 80, 10);
const attackShip = new Alien ("AttackShip", 45, 12);











// function alienName () {
// if (randomNumber === 5) {
// console.log("Mothership");
// } else {
//     console.log(randomNumber);

// }
// }

// let clickedLetter;
// function letterClicked () {
//     for (var i = 0; i < squareLetter.length; i++) {
//         squareLetter[i].addEventListener("click", (event) => {
//     clickedLetter = event.target.value;
//    correctLetter();

buttonClicked();