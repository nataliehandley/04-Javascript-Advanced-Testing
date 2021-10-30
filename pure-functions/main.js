    //attach event listener to my button

// document.querySelector(".translate-btn").addEventListener("click", () => {
//    //get the input value

//    const englishWord = document.querySelector(".input-box").value;
//     //if word matches, put translation into DOM

//    if(englishWord === "hello") {
//        document.querySelector(".translat numberOfDaysSinceBirth").innerHTML = "bonjour";
//    }else if (englishWord === "goodbye") {
//     document.querySelector(".translate-result").innerHTML = "au revoir";
//    } else {
//     document.querySelector(".translate-result").innerHTML = "unavailable";
//    }
// });


    //Make the code more testable
    //Function that translate english to french
    //Some DOM interaction in event listener

    // const translateEnglishToFrench = (englishWord) => {
    //     if(englishWord === "hello") {
    //         return "bonjour";
    //     } else if (englishWord === "goodbye") {
    //         return "au revoir";
    //     } else {
    //         return "unavailable";
    //     }
    // };

    // document.querySelector(".translate-btn").addEventListener ("click", () => {
    //     const englishWord = document.querySelector(".input-box").value;
    //     const frenchWord = translateEnglishToFrench(englishWord);
    //     document. querySelector(".translate-result").innerHTML = frenchWord;
    // })


//     const aDate = new Date("02/16/2021");

// const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
//     //making a full name uppercase
//   const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
//   console.log(fullName);

//   //days between two dates, one is a birthday, days someone has been alive
//   const bday = new Date(birthday);
//   const differenceInMs = aDate.getTime() - bday.getTime();

//   let ms = 1000 * 3600 * 24;

//   const result = differenceInMs / ms;
//   console.log(result);


//   //finding news headlines that include the word tech
//   let myArray = [];
//   arrayName.forEach((item) => {
//     if (item.includes("Tech")) {
//       return myArray.push(item);
//     } else {
//       console.log("nope not tech");
//     }
//   });
// };

// const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", [
//   "Tech is booming",
//   "Covid 19 yada yada yada",
//   "Economy due for a resurgance!",
//   "You can retrain in tech too!"
// ]);

// const makeFullNameUpperCase = (firstName, lastName) => {
//     const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
// return fullName; //use return rather than console log
// }
// console.log(makeFullNameUpperCase("matt", "bIcKell"));

//instead of the above, we can do function in one line
const makeFullNameUpperCase = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

console.log(makeFullNameUpperCase("matt", "bIcKell"));



const findDaysSinceBirth = (birthday) => {
const todaysDate = new Date("02/16/2021"); //was a global and now local
const birthDate = new Date(birthday);
const differenceInMs = todaysDate.getTime() - birthDate.getTime();

const millisecondsInDay = 1000 * 3600 * 24;

const numberOfDaysSinceBirth= Math.floor(differenceInMs /millisecondsInDay);
return `${numberOfDaysSinceBirth} days since birth`;

}

console.log(findDaysSinceBirth("09/26/1993"));


const findHeadlinesIncludingTech = (headlineArr) => {
    const techHeadlineArr = headlineArr.filter((headline) => {
    return headline.toLowerCase().includes("tech");
  });
return techHeadlineArr;
}
console.log(findHeadlinesIncludingTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]))