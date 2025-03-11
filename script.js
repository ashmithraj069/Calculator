let displayValue = '0';
const display = document.getElementById('display');


function updateDisplay() {
    display.textContent = displayValue;
}

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function backspace() {
    if (displayValue.length === 1) {
        displayValue = '0';
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    try {
        
        let expression = displayValue.replace('x', '*');
        displayValue = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('zero').addEventListener('click', () => appendToDisplay('0'));
    document.getElementById('one').addEventListener('click', () => appendToDisplay('1'));
    document.getElementById('two').addEventListener('click', () => appendToDisplay('2'));
    document.getElementById('three').addEventListener('click', () => appendToDisplay('3'));
    document.getElementById('four').addEventListener('click', () => appendToDisplay('4'));
    document.getElementById('five').addEventListener('click', () => appendToDisplay('5'));
    document.getElementById('six').addEventListener('click', () => appendToDisplay('6'));
    document.getElementById('seven').addEventListener('click', () => appendToDisplay('7'));
    document.getElementById('eight').addEventListener('click', () => appendToDisplay('8'));
    document.getElementById('nine').addEventListener('click', () => appendToDisplay('9'));
    
    
    document.getElementById('add').addEventListener('click', () => appendToDisplay('+'));
    document.getElementById('subtract').addEventListener('click', () => appendToDisplay('-'));
    document.getElementById('multiply').addEventListener('click', () => appendToDisplay('x'));
    document.getElementById('divide').addEventListener('click', () => appendToDisplay('/'));
    document.getElementById('percent').addEventListener('click', () => appendToDisplay('%'));
    document.getElementById('decimal').addEventListener('click', () => appendToDisplay('.'));
    
    
    document.getElementById('clear').addEventListener('click', clearDisplay);
    document.getElementById('backspace').addEventListener('click', backspace);
    document.getElementById('equals').addEventListener('click', calculate);
});


