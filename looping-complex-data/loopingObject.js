const message = {
    userName : "Natalie",
    content: "Have a great day",
};

for (let key in message) {
    // console.log(key);
    // console.log(message[key]);
}

const checkStrings = () => {
    for (let key in message) {
        console.log(message[key]);
        if(typeof(message[key]) === "string") {
            console.log(true);
        } else {
            console.log(false)

        }
    
    }
}
checkStrings();

console.log(Object.values(message));
console.log(Object.entries(message));
console.log(Object.keys(message));