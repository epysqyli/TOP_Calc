let selection = Array();

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