let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('display').textContent = '0';
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return; // Prevents adding an operator without a number
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('display').textContent = previousInput + " " + operator;
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    document.getElementById('display').textContent = currentInput;
}
