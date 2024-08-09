const displayContainer = document.querySelector('.display');
const displayExpression = document.querySelector('.display .expression');
const displayResult = document.querySelector('.display .result');

const isResultHidden = () => displayResult.classList.contains('hidden');
const isResultShown = () => !isResultHidden();
const getResultValue = () => displayResult.innerText == 'Error' ? '0' : displayResult.innterText;
const isSymbol = (button) => /[\+\-\*\/]$/.test(button.innerHTML);

document.querySelectorAll('.button').forEach(button => button.addEventListener('click', () => handleButtonClick(button)));

function handleButtonClick(button) {
    switch(button.innerHTML) {
        case 'C': {
            displayExpression.innerHTML = '0';
            displayResult.classList.add('hidden');
            break;
        }
        case '=': {
            try {
                displayResult.classList.remove('hidden');
                displayResult.innerHTML = eval(displayExpression.innerHTML);
            } catch {
                displayResult.innerHTML = "Error";
            }
            break;
        }
        default: {
            if (isResultShown()) {
                displayExpression.innerHTML = isSymbol(button) ? getResultValue() : '0';
                displayResult.classList.add('hidden');
            }
            if (displayExpression.innerHTML == '0') {
                displayExpression.innerHTML = button.innerHTML == '00' ? '0' : button,
                innerHTML;
            } else {
                displayExpression.innerHTML += button.innerHTML;
            }
        }
    }
}