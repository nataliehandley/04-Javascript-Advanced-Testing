// // console.log("working");

// let nataliesPromise = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// nataliesPromise
//     .then((message) => {
//         console.log(message + ". I am in the THEN")
//     })
//     .catch((message) => {
//         console.log(message + ". I am in the CATCH")
//     })

// const getRandomUser = () => {
//     const firstName = document.querySelector("h1");
//     fetch('https://randomuser.me/api/')
//         .then(response => response.json()) //converts response into json which comes as a promise
//         .then(json => firstName.innerHTML = (json.results[0].name.first))
//         .catch(err => console.log(err))
// }

// getRandomUser();

//name (h1), tagline (h4), description(p), abv(h2/h3), the first food that it pairs well with(p)
const makeBeerCard = beer => {
    return `
    <div class = "beer-container">
    <h1>${beer.name}</h1>
    <h4>${beer.tagline}</h4>
    <p>${beer.description}</p>
    <h3>${beer.abv}%</h3>
    <p> Served best with ${beer.food_pairing[0]}</p>
    </div>
    `
}



const getBeerInfo = () => {
    const beerCard = document.getElementById("card");
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(json => beerCard.innerHTML += makeBeerCard(json[0]))
        .catch(err => console.log(err))
  
}

getBeerInfo();