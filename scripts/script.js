let input = Array();

function add() {
    return a + b;
}

function subtract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}

function operate(operation, a, b) {
    input.push(a, b);
    return operation(input);
}

const display = document.querySelector("#result");
const nZero = document.getElementById("0");
const nOne = document.getElementById("1");
const nTwo = document.getElementById("2");
const nThree = document.getElementById("3");
const nFour = document.getElementById("4");
const nFive = document.getElementById("5");
const nSix = document.getElementById("6");
const nSeven = document.getElementById("7");
const nEight = document.getElementById("8");
const nNine = document.getElementById("9");

nZero.addEventListener('click', () => {
    input.push(nZero.textContent);
    createNum();
})

nOne.addEventListener('click', () => {
    input.push(nOne.textContent);
    createNum();
})

nTwo.addEventListener('click', () => {
    input.push(nTwo.textContent);
    createNum();
})

nThree.addEventListener('click', () => {
    input.push(nThree.textContent);
    createNum();
})

nFour.addEventListener('click', () => {
    input.push(nFour.textContent);
    createNum();
})

nFive.addEventListener('click', () => {
    input.push(nFive.textContent);
    createNum();
})

nSix.addEventListener('click', () => {
    input.push(nSix.textContent);
    createNum();
})

nSeven.addEventListener('click', () => {
    input.push(nSeven.textContent);
    createNum();
})

nEight.addEventListener('click', () => {
    input.push(nEight.textContent);
    createNum();
})

nNine.addEventListener('click', () => {
    input.push(nNine.textContent);
    createNum();
})

function createNum() {
    sinput = input.join('');
    dinput = document.createElement('div');
    dinput.setAttribute('id', 'resultbox');
    dinput.textContent = sinput;
    if (display.childElementCount > 0) display.removeChild(display.lastChild);
    display.appendChild(dinput);
    ninput = Number(sinput);
    return sinput, ninput;
}

const addition = document.getElementById('add');
addition.addEventListener('click', () => {
    a = ninput;
    input = [];
    operation = add;
    return a;
})

const enter = document.getElementById('enter');
enter.addEventListener('click', () => {
    b = ninput;
    console.log(a + b);
})