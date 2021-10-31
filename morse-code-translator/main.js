// let inputValue;
// function getWordToTranslate() {
//     const inputEl = document.querySelector(".input-box");
//     inputEl.addEventListener("input", (event) => {
//         inputValue = event.target.value;
//         console.log(inputValue);
        
//     })
// }




class Translator {
    constructor(wordToTranslate) {
        this.wordToTranslate = wordToTranslate;
        
       
    }
    breakdownWordToTranslate () {
        let brokenDownWord = ((this.wordToTranslate).toLowerCase()).split("");
        let morseArray = brokenDownWord.map((letter) => {
            if(letter === "a") {
                return "•-";
            } else if(letter === "b") {
                return "-•••"
            } else if(letter === "c") {
                return "-•-•"
            } else if(letter === "d") {
                return "-••"
            } else if(letter === "e") {
                return "•"
            } else if(letter === "f") {
                return "••-•"
            } else if(letter === "g") {
                return "--•"
            } else if(letter === "h") {
                return "••••"
            } else if(letter === "i") {
                return "••"
            } else if(letter === "j") {
                return "•---"
            } else if(letter === "k") {
                return "-•-"
            } else if(letter === "l") {
                return "•-••"
            } else if(letter === "m") {
                return "--"
            } else if(letter === "n") {
                return "-•"
            } else if(letter === "o") {
                return "---"
            } else if(letter === "p") {
                return "•--•"
            } else if(letter === "q") {
                return "--•-"
            } else if(letter === "r") {
                return "•-•"
            } else if(letter === "s") {
                return "•••"
            } else if(letter === "t") {
                return "-"
            } else if(letter === "u") {
                return "••-"
            } else if(letter === "v") {
                return "•••-"
            } else if(letter === "w") {
                return "•--"
            } else if(letter === "x") {
                return "-••-"
            } else if(letter === "y") {
                return "-•--"
            } else if(letter === "z") {
                return "--••"
            }
            
    })
    return morseArray;  
}
  
    
    getMorseLetter() {
        return translator1.breakdownWordToTranslate().join(" ");
  
}
}

const translator1 = new Translator("goodbye");
console.log(translator1.getMorseLetter());


