const buttonGame = document.getElementById("button");
const scoreContainer = document.querySelector(".score"); 


function buttonClicked () {
    buttonGame.addEventListener("click",() => {
            let randomNumber = ((Math.floor(Math.random() * 14)) + 1);
            if (randomNumber === 14) {
                console.log("Mothership");
                console.log(motherShip.reduceScore());
                console.log(motherShip.showScore());
                console.log(motherShip.endGame());
            } else if (randomNumber === 1) {
                console.log("Defence ship 1");
                console.log(defenceShip1.reduceScore());
                scoreContainer.innerHTML = defenceShip1.showScore();
                console.log(defenceShip1.shipDestroyed());
              
            } else if (randomNumber === 2) {
                console.log("Defence ship 2");
                console.log(defenceShip2.reduceScore());
                console.log(defenceShip2.showScore());
                console.log(defenceShip2.shipDestroyed());
            } else if (randomNumber === 3) {
                console.log("Defence ship 3");
                console.log(defenceShip3.reduceScore());
                console.log(defenceShip3.showScore());
                console.log(defenceShip3.shipDestroyed());
            } else if (randomNumber === 4) {
                console.log("Defence ship 4");
                console.log(defenceShip4.reduceScore());
                console.log(defenceShip4.showScore());
                console.log(defenceShip4.shipDestroyed());
            } else if (randomNumber === 5) {
                console.log("Defence ship 5");
                console.log(defenceShip5.reduceScore());
                console.log(defenceShip5.showScore());
                console.log(defenceShip5.shipDestroyed());
            } else if (randomNumber === 6) {
                console.log("Attack ship 1");
                console.log(attackShip1.reduceScore());
                console.log(attackShip1.shipDestroyed());
            } else if (randomNumber === 7) {
                console.log("Attack ship 2");
                console.log(attackShip2.reduceScore());
                console.log(attackShip2.shipDestroyed());
            } else if (randomNumber === 8) {
                console.log("Attack ship 3");
                console.log(attackShip3.reduceScore());
                console.log(attackShip3.shipDestroyed());
            } else if (randomNumber === 9) {
                console.log("Attack ship 4");
                console.log(attackShip4.reduceScore());
                console.log(attackShip4.shipDestroyed());
            } else if (randomNumber === 10) {
                console.log("Attack ship 5");
                console.log(attackShip5.reduceScore());
                console.log(attackShip5.shipDestroyed());
            } else if (randomNumber === 11) {
                console.log("Attack ship 6");
                console.log(attackShip6.reduceScore());
                console.log(attackShip6.shipDestroyed());
            } else if (randomNumber === 12) {
                console.log("Attack ship 7");
                console.log(attackShip7.reduceScore());
                console.log(attackShip7.shipDestroyed());
            } else if (randomNumber === 13) {
                console.log("Attack ship 8");
                console.log(attackShip8.reduceScore());
                console.log(attackShip8.shipDestroyed());
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
    shipDestroyed() {
        if(this.score <= 0) {
            console.log("SHIP DESTROYED");

        }
    }
    showScore() {
        const scoreHTML = `
            <h2>${this.score}</h2>
        `;
            return scoreHTML;
        };
}
    



class DefenceShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints) 
            this.name = name; 
    }
   
}



class AttackShip extends Alien {
    constructor(score, minusPoints, name) {
        super(score, minusPoints) 
            this.name = name; 
    }
 
}

class MotherShip extends Alien {
    constructor(score, minusPoints) {
        super(score, minusPoints) 
            
    }
    endGame() {
        if(this.score <= 0) {
            alert("GAME OVER");
        }
    }
    // showScore() {
    //         currentScoreMother.innerHTML = this.score;
    //      }
    
    }
 


const motherShip = new MotherShip ( 100, 9);

const defenceShip1 = new DefenceShip (80, 10, "defenceShip1");
const defenceShip2 = new DefenceShip (80, 10, "defenceShip2");
const defenceShip3 = new DefenceShip (80, 10, "defenceShip3");
const defenceShip4 = new DefenceShip (80, 10, "defenceShip4");
const defenceShip5 = new DefenceShip (80, 10, "defenceShip5");

const attackShip1 = new AttackShip (45, 12, "attackShip1");
const attackShip2 = new AttackShip (45, 12, "attackShip2");
const attackShip3 = new AttackShip (45, 12, "attackShip3");
const attackShip4 = new AttackShip (45, 12, "attackShip4");
const attackShip5 = new AttackShip (45, 12, "attackShip5");
const attackShip6 = new AttackShip (45, 12, "attackShip6");
const attackShip7 = new AttackShip (45, 12, "attackShip7");
const attackShip8 = new AttackShip (45, 12, "attackShip8");











buttonClicked();


//get rid of undefined on shipsDestroyed() console.log