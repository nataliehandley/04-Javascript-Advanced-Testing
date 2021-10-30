
function getWordToTranslate() {
    const inputEl = document.querySelector(".input-box");
    inputEl.addEventListener("input", (event) => {
        let inputValue = event.target.value;
        console.log(inputValue);
        
    })
}
getWordToTranslate();



class Translator {
    constructor(inputValue) {
        this.inputValue = inputValue;
        console.log(inputValue);
       
    }

    



    
    getMorseLetter() {

    }
    getMorseOutput() {

    }
}




