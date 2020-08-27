let input = Array();
let inputList = Array();
let opOrder = Array();
let enterCount = 0;
let opCount = 0;

function add(a, b) {
    result = a + b;
    return result;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    return operation(a, b);
}

const display = document.querySelector("#result");
const nZero = document.getElementById("0");
const nOne = document.getElementById("1");
const nTwo = document.getElementById("2");
const nThree = document.getElementById("3");
const nFour = document.getElementById("4");
const nFive = document.getElementById("5");
const nSix = document.getElementById("7");
const nSeven = document.getElementById("7");
const nEight = document.getElementById("8");
const nNine = document.getElementById("9");
const CE = document.getElementById("CE");
const dot = document.getElementById("dot");

let numbers = [nZero, nOne, nTwo, nThree, nFour, nFive, nSix, nSeven, nEight, nNine, dot];

numbers.forEach(function (number) {
    number.addEventListener('click', () => {
        input.push(number.textContent);
        createNum();
    })
})

CE.addEventListener('click', () => {
    if (display.childElementCount > 0) display.removeChild(display.lastChild);
    while (input.length > 0) input.pop();
    while (inputList.length > 0) inputList.pop();
    while (opOrder.length > 0) opOrder.pop();
    enterCount = 0;
})

const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const equal = document.getElementById('enter');

let operations = [addition, subtraction, multiplication, division, equal];

function createNum() {
    sinput = input.join('');
    ninput = Number(sinput);
    dinput = document.createElement('div');
    dinput.setAttribute('id', 'resultbox');
    dinput.textContent = sinput;
    if (display.childElementCount > 0) display.removeChild(display.lastChild);
    display.appendChild(dinput);
    return sinput, ninput;
}

//pushes input into inputList
operations.forEach(function (operation) {
    operation.addEventListener('click', () => {
        if (enterCount == 1) {
            opCount = 1;
            return;
        }
        inputList.push(ninput);
        if (inputList.length >= 1) {
            dinput.textContent = "";
            while (input.length > 0) input.pop();
        }
    })
})

// saves the operation order and executes the calculation by means of calculate()
operations.forEach(function (operation) {
    operation.addEventListener('click', () => {
        if (inputList.length == 0) return;
        if (operation.id == "add") {
            opOrder.push("add");
            console.log(opOrder);
            console.log(inputList);
            if (opCount == 1) enterCount--;
            calculate();
        }
        else if (operation.id == "subtract") {
            opOrder.push("subtract");
            console.log(opOrder);
            console.log(inputList);
            if (opCount == 1) enterCount--;
            calculate();
        }
        else if (operation.id == "multiply") {
            opOrder.push("multiply");
            console.log(opOrder);
            console.log(inputList);
            if (opCount == 1) enterCount--;
            calculate();
        }
        else if (operation.id == "divide") {
            opOrder.push("divide");
            console.log(opOrder);
            console.log(inputList);
            if (opCount == 1) enterCount--;
            calculate();
        }
        else if (operation.id == 'enter') {
            if (enterCount >= 1) return;
            opOrder.push("enter");
            console.log(opOrder);
            console.log(inputList);
            calculate();
            while (opOrder.length > 0) opOrder.pop();
            enterCount++;
            if (opCount == 1) opCount--;
        }
    })
})

function calculate() {
    if ((inputList.length == 2) && (opOrder[0] == 'add')) {
        intRes = operate(add, inputList[0], inputList[1]);
        while (inputList.length > 0) inputList.pop();
        inputList.push(intRes);
        opOrder.splice(0, 1);
        console.log(intRes);
        dinput.textContent = (String(inputList[0])).slice(0,7);
        return intRes;
    }
    if ((inputList.length == 2) && (opOrder[0] == 'subtract')) {
        intRes = operate(subtract, inputList[0], inputList[1]);
        while (inputList.length > 0) inputList.pop();
        inputList.push(intRes);
        opOrder.splice(0, 1);
        console.log(intRes);
        dinput.textContent = (String(inputList[0])).slice(0,7);
        return intRes;
    }
    if ((inputList.length == 2) && (opOrder[0] == 'multiply')) {
        intRes = operate(multiply, inputList[0], inputList[1]);
        while (inputList.length > 0) inputList.pop();
        inputList.push(intRes);
        opOrder.splice(0, 1);
        console.log(intRes);
        dinput.textContent = (String(inputList[0])).slice(0,7);
        return intRes;
    }
    if ((inputList.length == 2) && (opOrder[0] == 'divide')) {
        intRes = operate(divide, inputList[0], inputList[1]);
        while (inputList.length > 0) inputList.pop();
        inputList.push(intRes);
        opOrder.splice(0, 1);
        console.log(intRes);
        dinput.textContent = (String(inputList[0])).slice(0,7);
        return intRes;
    }
    if ((inputList.length == 2) && (opOrder[0] == 'enter')) {
        intRes = operate(opOrder[opOrder.length - 2], inputList[0], inputList[1]);
        opOrder.splice(0, 1);
        inputList.push(intRes);
        dinput.textContent = (String(inputList[0])).slice(0,7);
        return intRes;
    }
}