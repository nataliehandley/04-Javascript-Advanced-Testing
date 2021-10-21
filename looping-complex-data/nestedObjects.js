const user = {
    id : "ahuofhowfw",
    loggedIn : true,
    information : {
        firstName : "Natalie",
        lastName :"Handley",
        age :36
    },
    contact: {
        email: "natalie@natalie.com",
        contactNumber: "01234678438",
        address: {
            houseNumber: 12,
            nameOfRoad: "high street",
            postCode: "gu46 8hu",
            country: "UK",
        }
    },
    likes: ["cycling", "disco", "coding"],
}

const userTwo = {
    id : "ahuofhowfw",
    loggedIn : true,
    information : {
        firstName : "Natalie",
        lastName :"Handley",
        age :36
    },
    contact: {
        email: "natalie@natalie.com",
        contactNumber: "01234678438",
        address: {
            houseNumber: 12,
            nameOfRoad: "high street",
            postCode: "gu46 8hu",
            country: "UK",
        }
    },
    likes: ["cycling", "disco", "coding"],
}
console.log(user.contact.contactNumber);
console.log(user.information.age);
console.log(user.contact.address.country);

console.log(user.contact);
console.log(user.likes[2]);

const userArray = [user, userTwo];

userArray.forEach(user => {
    console.log(user.likes)
})