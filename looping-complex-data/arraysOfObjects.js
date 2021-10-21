// const fruitObjectArray = [
//     {fruit: "apple"},
//     {fruit: "banana"},
//     {fruit: "orange"}
// ];

// // console.log(fruitObjectArray[1].fruit);

// // for (let i = 0; i < fruitObjectArray.length; i++) {

// // console.log(Object.values(fruitObjectArray));
// // };

// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     const fruitValue = fruitObject.fruit;
//     return fruitValue;
    
// })
// console.log(fruitValueArray);

// const searchTerm = "apple";

// const filteredFruitObject = fruitObjectArray.filter((fruitObject) => {
//     if (fruitObject.fruit === "apple") {
//         return fruitObject;
//     }
//     //or const fruitMatch = fruitObject.fruit.includes(searchTerm);
// })
// console.log(filteredFruitObject);

// const generateFruitHtml = (fruitArray) => {
//     const html = fruitArray.map(fruitObject => {
//         return `<li>${fruitObject.fruit}</li>`
//     });
//     return html.join("");
// }
// console.log(generateFruitHtml(fruitObjectArray));

const fruitObjectArray = [
    {fruit: "apple", rating: 8, price: 150},
    {fruit: "banana", rating: 5, price: 100}, 
    {fruit: "orange", rating: 6, price: 120}
];

// console.log(fruitObjectArray[2].price);

 const generateFruitHtml = (fruitArray) => {
        const html = fruitArray.map(fruitObject => {
            const price = (fruitObject.price / 100).toFixed(2);
            const capitalised = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);


        const cardHtml = `
        <div>
        <h3>${capitalised}</h3>
        <p>This fruit is ${fruitObject.rating} /10 </p>
        <p>Buy now for $${price} </p>
        </div>`

        return cardHtml;
        });
        return html.join("");
    }
    console.log(generateFruitHtml(fruitObjectArray));

const sortByHighestRating = fruitObjectArray.sort((a,b) => {
    return b.rating - a.rating;
})
console.log(sortByHighestRating);
console.log(generateFruitHtml(sortByHighestRating));