// Generator functions 

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

console.log(getRandomUppercase());