const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.display');
let firstValue = '';
let operator = '';
let secondValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        if (isNaN(value)) {
            if (value === 'C') {
                firstValue = '';
                operator = '';
                secondValue = '';
                display.innerText = '0';
            } else if (value === '=') {
                secondValue = display.innerText;
                display.innerText = eval(firstValue + operator + secondValue);
            } else {
                operator = value;
                firstValue = display.innerText;
                display.innerText = '0';
            }
        } else {
            if (operator === '') {
                firstValue += value;
                display.innerText = firstValue;
            } else {
                secondValue += value;
                display.innerText = secondValue;
            }
        }
    });
});
