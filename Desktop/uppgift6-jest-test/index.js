




// function that takes the string and return it with uppercase
function toUpperCase(text) {
    const upperText = text.toUpperCase();
    console.log(upperText);
    return upperText;
}

if (typeof module !=="undefinded" && 
module.exports) {
    module.exports = toUpperCase; 
}

