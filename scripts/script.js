let input = Array();
let inputList = Array();
let intList = Array();
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
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');

let operations = [addition, subtraction, multiplication, division];

// reexamine code starting from here

function chooser() {
    for (let i = 0; i < operations.length; i++) {
        operations[i].addEventListener('click', (event) => {
            console.log(operations[i].id);
            inputList.push(ninput);
            if (inputList.length >= 1) {
                ninput = 0;
                dinput.textContent = "";
                input = [];
            }
            if (operations[i].id == "add") {
                opOrder.push("add");
            }
            else if (operations[i].id == "subtract") {
                opOrder.push("subtract");
            }
            else if (operations[i].id == "multiply") {
                opOrder.push("multiply");
            }
            else if (operations[i].id == "divide") {
                opOrder.push("divide");
            }
        })
    }
}
chooser();

const equal = document.getElementById('enter');
equal.addEventListener('click', () => {
    calculate();
})

// allow for more operator to be concatenated without clicking equal
// make sure results are correct

function calculate() {
    inputList.push(ninput);
    dinput.textContent = "";
    while (opOrder.length > 0) {
        if (opOrder[0] == "add") {
            if (intList.length == 0) {
                intRes = operate(add, inputList[0], inputList[1]);
                while (inputList.length > 0) inputList.pop();
            }
            // error is somehow here
            else if (intList.length > 0) {
                intRes = operate(add, inputList[0], intList[intList.length - 1]);
                while (inputList.length > 0) inputList.pop();
            }
            intList.push(intRes);
            opOrder.splice(0, 1);
            console.log(intRes);
        }
        if (opOrder[0] == "subtract") {
            
        }
        if (opOrder[0] == "multiply") {
            
        }
        if (opOrder[0] == "divide") {
            
        }
    }
}