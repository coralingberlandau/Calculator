let expression = '';

function appendToScreen(value) {
    expression += value;
    document.getElementById('screen').value = expression;
}

function clearScreen() {
    expression = '';
    document.getElementById('screen').value = '';
}

function operation(op) {
    expression += op;
    document.getElementById('screen').value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById('screen').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('screen').value = 'Error';
        expression = '';
    }
}
