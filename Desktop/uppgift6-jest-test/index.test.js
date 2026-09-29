

const toUpperCase = require("./index");

test("return text to UPPERCASE", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");

});