// let inputValue;
// function getWordToTranslate() {
//     const inputEl = document.querySelector(".input-box");
//     inputEl.addEventListener("input", (event) => {
//         inputValue = event.target.value;
//         console.log(inputValue);
        
//     })
// }




class TranslatorEnglishToMorse {
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
        return translator.breakdownWordToTranslate().join(" ");
  
}
}

const translator = new TranslatorEnglishToMorse("hello");
console.log(translator.getMorseLetter());

class TranslatorMorseToEnglish extends TranslatorEnglishToMorse {
    constructor(wordToTranslate, MorseWordToTranslate) {
        super(wordToTranslate) 
            this.MorseWordToTranslate = MorseWordToTranslate;
        
    }
    splitMorseCode () {
        let morseWord = translator.getMorseLetter().split(" ");
        let englishArray = morseWord.map((symbol) => {
            if(symbol === "•-") {
                return "a";
            } else if(symbol === "-•••") {
                return "b"
            } else if(symbol === "-•-•") {
                return "c"
            } else if(symbol === "-••") {
                return "d"
            } else if(symbol === "•") {
                return "e"
            } else if(symbol === "••-•") {
                return "f"
            } else if(symbol === "--•") {
                return "g"
            } else if(symbol === "••••") {
                return "h"
            } else if(symbol === "••") {
                return "i"
            } else if(symbol === "•---") {
                return "j"
            } else if(symbol === "-•-") {
                return "k"
            } else if(symbol === "•-••") {
                return "l"
            } else if(symbol === "--") {
                return "m"
            } else if(symbol === "-•") {
                return "n"
            } else if(symbol === "---") {
                return "o"
            } else if(symbol === "•--•") {
                return "p"
            } else if(symbol === "--•-") {
                return "q"
            } else if(symbol === "•-•") {
                return "r"
            } else if(symbol === "•••") {
                return "s"
            } else if(symbol === "-") {
                return "t"
            } else if(symbol === "••-") {
                return "u"
            } else if(symbol === "•••-") {
                return "v"
            } else if(symbol === "•--") {
                return "w"
            } else if(symbol === "-••-") {
                return "x"
            } else if(symbol === "-•--") {
                return "y"
            } else if(symbol === "--••") {
                return "z"
            }
            
    })
    return englishArray;

    }
    getEnglishWord() {
        return morseTranslator.splitMorseCode().join("");
  
}
}

const morseTranslator = new TranslatorMorseToEnglish("--• --- --- -•• -••• -•-- •");
console.log(morseTranslator.getEnglishWord());
