// DOM elements 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Generate event listen
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber= numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbols, 
        length
    )
})

// Generate password func
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Init password variable
    // 2. Filter out unchecked types
    // 3. Loop over length call generator func for each type
    // 4. Add final password to the password var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount)

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
    );

    console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

    
}

// Generator functions 

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}+<>/.,'
    return symbols[Math.floor(Math.random() * symbols.length)];
}
