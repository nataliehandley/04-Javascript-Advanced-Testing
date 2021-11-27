
// ENGLISH TO MORSE TRANSLATOR

class TranslatorEnglishToMorse {
    constructor() {
        this.wordToTranslate = document.querySelector(".english-input-box").value; 
        //takes input from input box and stores in this.wordToTranslate
    }

    breakdownWordToTranslate () {
        let brokenDownWord = ((this.wordToTranslate).toLowerCase()).split("");
        // breaks the word to translate down into individual letters in lower case
        let morseArray = brokenDownWord.map((letter) => {
        //maps over each letter, converts it into a morse code symbol and stores it in an array
            if(letter === "a") {
                return ".-";
            } else if(letter === "b") {
                return "-..."
            } else if(letter === "c") {
                return "-.-."
            } else if(letter === "d") {
                return "-.."
            } else if(letter === "e") {
                return "."
            } else if(letter === "f") {
                return "..-."
            } else if(letter === "g") {
                return "--."
            } else if(letter === "h") {
                return "...."
            } else if(letter === "i") {
                return ".."
            } else if(letter === "j") {
                return ".---"
            } else if(letter === "k") {
                return "-.-"
            } else if(letter === "l") {
                return ".-.."
            } else if(letter === "m") {
                return "--"
            } else if(letter === "n") {
                return "-."
            } else if(letter === "o") {
                return "---"
            } else if(letter === "p") {
                return ".--."
            } else if(letter === "q") {
                return "--.-"
            } else if(letter === "r") {
                return ".-."
            } else if(letter === "s") {
                return "..."
            } else if(letter === "t") {
                return "-"
            } else if(letter === "u") {
                return "..-"
            } else if(letter === "v") {
                return "...-"
            } else if(letter === "w") {
                return ".--"
            } else if(letter === "x") {
                return "-..-"
            } else if(letter === "y") {
                return "-.--"
            } else if(letter === "z") {
                return "--.."
            }
    })
    return morseArray;  
}

    getMorseLetter() {
        return translator.breakdownWordToTranslate().join(" ");
    // returns the morse code symbols from the array and joins them together in a string
}
}

//new function to run when button is pressed and also to add morse code dynamically to page
let translator;
function englishToMorseTranslator() {
    translator = new TranslatorEnglishToMorse();
    console.log(translator.getMorseLetter()); 
    const showTranslation = document.createElement("h2");
    showTranslation.innerHTML = translator.getMorseLetter();
    document.body.appendChild(showTranslation);
}

//button pressed runs function
const buttonEnglishToMorse = document.querySelector("#english");
    buttonEnglishToMorse.addEventListener("click", () => {
            englishToMorseTranslator();  
        })


  //MORSE TO ENGLISH TRANSLATOR      

class TranslatorMorseToEnglish extends TranslatorEnglishToMorse {
    constructor(wordToTranslate) {
        super(wordToTranslate) 
        this.MorseWordToTranslate = document.querySelector(".morse-input-box").value; 
        //takes input from input box and stores in this.MorseWordToTranslate

        
    }
    splitMorseCode () {
        let morseWord = this.MorseWordToTranslate.split(" ");
        let englishArray = morseWord.map((symbol) => {
            if(symbol === ".-") {
                return "a";
            } else if(symbol === "-...") {
                return "b"
            } else if(symbol === "-.-.") {
                return "c"
            } else if(symbol === "-..") {
                return "d"
            } else if(symbol === ".") {
                return "e"
            } else if(symbol === "..-.") {
                return "f"
            } else if(symbol === "--.") {
                return "g"
            } else if(symbol === "....") {
                return "h"
            } else if(symbol === "..") {
                return "i"
            } else if(symbol === ".---") {
                return "j"
            } else if(symbol === "-.-") {
                return "k"
            } else if(symbol === ".-..") {
                return "l"
            } else if(symbol === "--") {
                return "m"
            } else if(symbol === "-.") {
                return "n"
            } else if(symbol === "---") {
                return "o"
            } else if(symbol === ".--.") {
                return "p"
            } else if(symbol === "--.-") {
                return "q"
            } else if(symbol === ".-.") {
                return "r"
            } else if(symbol === "...") {
                return "s"
            } else if(symbol === "-") {
                return "t"
            } else if(symbol === "..-") {
                return "u"
            } else if(symbol === "...-") {
                return "v"
            } else if(symbol === ".--") {
                return "w"
            } else if(symbol === "-..-") {
                return "x"
            } else if(symbol === "-.--") {
                return "y"
            } else if(symbol === "--..") {
                return "z"
            }
    })
    return englishArray;
    }

    getEnglishWord() {
        return morseTranslator.splitMorseCode().join("");
}
}

//new function to run when button is pressed and also to add morse code dynamically to page

let morseTranslator;
function morseToEnglishTranslator() {
    morseTranslator = new TranslatorMorseToEnglish();
    console.log(morseTranslator.getEnglishWord()); 
    const showEnglishTranslation = document.createElement("h3");
    showEnglishTranslation.innerHTML = morseTranslator.getEnglishWord();
    document.body.appendChild(showEnglishTranslation);
}

//button pressed runs function
const buttonMorseToEnglish = document.querySelector("#morse");
    buttonMorseToEnglish.addEventListener("click", () => {
            morseToEnglishTranslator();  
        })