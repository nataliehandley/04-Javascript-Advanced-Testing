const buttonGame = document.getElementById("button");



function buttonClicked () {
    buttonGame.addEventListener("click",(event) => {
        let randomNumber = ((Math.floor(Math.random() * 14)) + 1);
        if (randomNumber === 14) {
            console.log("Mothership");
            console.log(motherShip.reduceScore());
        } else if (randomNumber === 1) { 
            console.log("Defence ship 1");
            console.log(defenceShip1.reduceScore());
            console.log(defenceShip1.shipDestroyed());
        } else if (randomNumber === 2) {
            console.log("Defence ship 2");
            console.log(defenceShip2.reduceScore());
            console.log(defenceShip2.shipDestroyed());
        } else if (randomNumber === 3) {
            console.log("Defence ship 3");
            console.log(defenceShip3.reduceScore());
            console.log(defenceShip3.shipDestroyed());
        } else if (randomNumber === 4) {
            console.log("Defence ship 4");
            console.log(defenceShip4.reduceScore());
            console.log(defenceShip4.shipDestroyed());
        } else if (randomNumber === 5) {
            console.log("Defence ship 5");
            console.log(defenceShip5.reduceScore());
            console.log(defenceShip5.shipDestroyed());
        } else {
                console.log("Attack ship");
                console.log(attackShip.reduceScore());
            }

    })
}

class Alien {
    constructor(score, minusPoints) {
        this.score = score;
        this.minusPoints = minusPoints;
    }
    reduceScore() {
        return (this.score -= this.minusPoints)
        
    }
    
    
}

class DefenceShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints) 
            this.name = name; 
    }
    shipDestroyed() {
        if(this.score <= 0) {
            console.log("SHIP DESTROYED");

        
    }
}
}

const motherShip = new Alien ( 100, 9);
const attackShip = new Alien ( 45, 12);


const defenceShip1 = new DefenceShip (80, 10, "defenceShip1");
const defenceShip2 = new DefenceShip (80, 10, "defenceShip2");
const defenceShip3 = new DefenceShip (80, 10, "defenceShip3");
const defenceShip4 = new DefenceShip (80, 10, "defenceShip4");
const defenceShip5 = new DefenceShip (80, 10, "defenceShip5");









buttonClicked();