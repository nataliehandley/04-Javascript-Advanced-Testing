const buttonGame = document.getElementById("button");
const scoreContainer1 = document.querySelector(".score-defence-1"); 
const scoreContainer2 = document.querySelector(".score-defence-2"); 
const scoreContainer3 = document.querySelector(".score-defence-3"); 
const scoreContainer4 = document.querySelector(".score-defence-4"); 
const scoreContainer5 = document.querySelector(".score-defence-5"); 
const scoreContainer6 = document.querySelector(".score-attack-1");
const scoreContainer7 = document.querySelector(".score-attack-2");
const scoreContainer8 = document.querySelector(".score-attack-3");
const scoreContainer9 = document.querySelector(".score-attack-4");
const scoreContainer10 = document.querySelector(".score-attack-5");
const scoreContainer11 = document.querySelector(".score-attack-6");
const scoreContainer12 = document.querySelector(".score-attack-7");
const scoreContainer13 = document.querySelector(".score-attack-8");
const scoreContainer14 = document.querySelector(".score-mother");
const scoreContainer = document.querySelectorAll(".score");


const buttonClicked = () => {
    
            let randomNumber = ((Math.floor(Math.random() * 14)) + 1);

            if (randomNumber === 14) {
                console.log("Mothership");
                console.log(motherShip.reduceScore());
                scoreContainer14.innerHTML = motherShip.showScore();
                console.log(motherShip.endGame());
            } else if (randomNumber === 1) {
                console.log("Defence ship 1");
                console.log(defenceShip1.reduceScore());
                scoreContainer1.innerHTML = defenceShip1.showScore();
                console.log(defenceShip1.shipDestroyed());
            } else if (randomNumber === 2) {
                console.log("Defence ship 2");
                console.log(defenceShip2.reduceScore());
                scoreContainer2.innerHTML = defenceShip2.showScore();
                console.log(defenceShip2.shipDestroyed());
            } else if (randomNumber === 3) {
                console.log("Defence ship 3");
                console.log(defenceShip3.reduceScore());
                scoreContainer3.innerHTML = defenceShip3.showScore();
                console.log(defenceShip3.shipDestroyed());
            } else if (randomNumber === 4) {
                console.log("Defence ship 4");
                console.log(defenceShip4.reduceScore());
                scoreContainer4.innerHTML = defenceShip4.showScore();
                console.log(defenceShip4.shipDestroyed());
            } else if (randomNumber === 5) {
                console.log("Defence ship 5");
                console.log(defenceShip5.reduceScore());
                scoreContainer5.innerHTML = defenceShip5.showScore();
                console.log(defenceShip5.shipDestroyed());
            } else if (randomNumber === 6) {
                console.log("Attack ship 1");
                console.log(attackShip1.reduceScore());
                scoreContainer6.innerHTML = attackShip1.showScore();
                console.log(attackShip1.shipDestroyed());
            } else if (randomNumber === 7) {
                console.log("Attack ship 2");
                console.log(attackShip2.reduceScore());
                scoreContainer7.innerHTML = attackShip2.showScore();
                console.log(attackShip2.shipDestroyed());
            } else if (randomNumber === 8) {
                console.log("Attack ship 3");
                console.log(attackShip3.reduceScore());
                scoreContainer8.innerHTML = attackShip3.showScore();
                console.log(attackShip3.shipDestroyed());
            } else if (randomNumber === 9) {
                console.log("Attack ship 4");
                console.log(attackShip4.reduceScore());
                scoreContainer9.innerHTML = attackShip4.showScore();
                console.log(attackShip4.shipDestroyed());
            } else if (randomNumber === 10) {
                console.log("Attack ship 5");
                console.log(attackShip5.reduceScore());
                scoreContainer10.innerHTML = attackShip5.showScore();
                console.log(attackShip5.shipDestroyed());
            } else if (randomNumber === 11) {
                console.log("Attack ship 6");
                console.log(attackShip6.reduceScore());
                scoreContainer11.innerHTML = attackShip6.showScore();
                console.log(attackShip6.shipDestroyed());
            } else if (randomNumber === 12) {
                console.log("Attack ship 7");
                console.log(attackShip7.reduceScore());
                scoreContainer12.innerHTML = attackShip7.showScore();
                console.log(attackShip7.shipDestroyed());
            } else if (randomNumber === 13) {
                console.log("Attack ship 8");
                console.log(attackShip8.reduceScore());
                scoreContainer13.innerHTML = attackShip8.showScore();
                console.log(attackShip8.shipDestroyed());
            }
        }



class Alien {
    constructor(score, minusPoints, endScore) {
        this.score = score;
        this.minusPoints = minusPoints;
        this.endScore = 0
    }
    reduceScore() {
        if(this.score >= 0) {
        return (this.score -= this.minusPoints)
        
      } else {
        this.score = 0;
     }
}
   
    showScore() {
        const scoreHTML = `
            <h2>${this.score}</h2>
        `;
            return scoreHTML;
        }
     shipDestroyed() {
            if(this.score <= 0) {
               this.endScore = this.score;
    
    
            }
        }     
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


buttonGame.addEventListener("click",buttonClicked)











//get rid of undefined on shipsDestroyed() console.log