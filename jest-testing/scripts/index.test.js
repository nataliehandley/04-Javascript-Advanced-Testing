import {getName} from "./index.js";

it("Should return the string 'Natalie, 37 years old'", () => {
    const output = getName('Natalie', 37);
    expect(output).toBe('Natalie, 37 years old');
})


it("Should return the string 'Alexander, 4 years old'", () => {
    const output = getName('Alexander', 4);
    expect(output).toBe('Alexander, 4 years old');
})