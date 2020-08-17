let selection = Array();
let sSelection = String();

function add(selection) {
    return selection.reduce((a, b) => a+b);
}

function subtract(selection) {
    return selection.reduce((a, b) => a-b);
}

function multiply(selection) {
    return selection.reduce((a,b) => a*b);
}

function divide(selection) {
    return selection.reduce((a,b) => a/b);
}

function operate(operation, a, b) {
    selection.push(a, b);
    return operation(selection);
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
    console.log(nZero.textContent);
    selection.push(nZero.textContent);
    sArray(); 
})

nOne.addEventListener('click', () => {
    console.log(nOne.textContent);
    selection.push(nOne.textContent);
    sArray();
})

nTwo.addEventListener('click', () => {
    console.log(nTwo.textContent);
    selection.push(nTwo.textContent);
    sArray();
})

nThree.addEventListener('click', () => {
    console.log(nThree.textContent);
    selection.push(nThree.textContent);
    sArray();
})

nFour.addEventListener('click', () => {
    console.log(nFour.textContent);
    selection.push(nFour.textContent);
    sArray();
})

nFive.addEventListener('click', () => {
    console.log(nFive.textContent);
    selection.push(nFive.textContent);
    sArray();
})

nSix.addEventListener('click', () => {
    console.log(nSix.textContent);
    selection.push(nSix.textContent);
    sArray();
})

nSeven.addEventListener('click', () => {
    console.log(nSeven.textContent);
    selection.push(nSeven.textContent);
    sArray();
})

nEight.addEventListener('click', () => {
    console.log(nEight.textContent);
    selection.push(nEight.textContent);
    sArray();
})

nNine.addEventListener('click', () => {
    console.log(nNine.textContent);
    selection.push(nNine.textContent);
    sArray();
})

function sArray() {
    sSelection = selection.join('');
    dSelection = document.createElement('div');
    dSelection.setAttribute('id', 'resultbox');
    dSelection.textContent = sSelection;
    if (display.childElementCount > 0) display.removeChild(display.lastChild);
    display.appendChild(dSelection);
    return sSelection;
}