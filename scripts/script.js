let input = Array();
let inputList = Array();
let opOrder = Array();

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

// each function should solve one single problem

function push() {
    operations.forEach(function (operation) {
        operation.addEventListener('click', () => {
            console.log(operation.id);
            inputList.push(ninput);
            if (inputList.length >= 1) {
                dinput.textContent = "";
                while (input.length > 0) input.pop();
            }
        })
    })
}

function chooser() {
    operations.forEach(function (operation) {
        operation.addEventListener('click', () => {
            if (operation.id == "add") opOrder.push("add");
            else if (operation.id == "subtract") opOrder.push("subtract");
            else if (operation.id == "multiply") opOrder.push("multiply");
            else if (operation.id == "divide") opOrder.push("divide");
            else if (operation.id == 'enter') opOrder.push("enter");
        })
    })
}

function calculate(intRes) {
    if ((inputList.length == 2) && (opOrder[0] == 'add')) {
        intRes = operate(add, inputList[0], inputList[1]);
        opOrder.splice(0, 1);
        return intRes;
    }
    if ((inputList.length == 2) && (opOrder[0] == 'subtract')) {
        intRes = operate(subtract, inputList[0], inputList[1]);
        opOrder.splice(0, 1);
    }
    if ((inputList.length == 2) && (opOrder[0] == 'multiply')) {
        intRes = operate(multiply, inputList[0], inputList[1]);
        opOrder.splice(0, 1);
    }
    if ((inputList.length == 2) && (opOrder[0] == 'divide')) {
        intRes = operate(division, inputList[0], inputList[1]);
        opOrder.splice(0, 1);
    }
}
chooser();
push();