var numberButton = document.querySelectorAll(".number");
var clearButton = document.getElementById("clear");
var currentDisplay = document.getElementById("display");
var backspaceButton = document.getElementById("backspace");
var operatorButton = document.getElementsByClassName("operator");
var equalsButton = document.getElementById("equals");
var operatorDisplay = document.getElementById("operatorDisplay");
var decimalButton = document.getElementById("decimal");
var posNeg = document.getElementById("posneg");
var calcArray = [];


// Adds event listener for each individual number button click and populates display.
for (i=0; i<10; i++) {
    numberButton[i].addEventListener("click", addInputCurrentDisplay);
}

// Adds event listner to clear button and clears display and resets calculator.
clearButton.addEventListener("click", clearDisplay);
clearButton.addEventListener("click", resetCalc);


// Adds event listener to backspace button and removes number from display.
backspaceButton.addEventListener("click", backspace);

// When operator button is clicked, adds the number and the operator to the calc array.
for (i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", function() {
        // Replaces previous operator if no new number entered before another operator.
        if (currentDisplay.textContent == "") {
            calcArray.pop();
            calcArray.push(this.textContent);
            operatorDisplay.textContent = (`${calcArray[0].slice(0, 20)} ${calcArray[1]}`);
            return;
        }
        displayTotal();
        calcArray.push(currentDisplay.textContent);
        calcArray.push(this.textContent);
        clearDisplay();
        let calcLength = calcArray.length;
        if (calcArray[calcLength - 1] === this.textContent) {
            operatorDisplay.textContent = (`${calcArray[0].slice(0, 20)} ${calcArray[1]}`);
        }
    })
}

// Event listener on equals button provides the answer to answer equation.
equalsButton.addEventListener("click", displayTotal)

// EVent listener on decimal button to add decimal point.
decimalButton.addEventListener("click", addDecimalCurrentDisplay);

// Event listener to add typed number to calculator.
document.addEventListener('keydown', function(e) {
    switch (parseInt(e.key)) {
        case 0:
            addNumberKey(e.key);
            break;
        case 1:
            addNumberKey(e.key);
            break;
        case 2:
            addNumberKey(e.key);
            break;
        case 3:
            addNumberKey(e.key);
            break;
        case 4:
            addNumberKey(e.key);
            break;
        case 5:
            addNumberKey(e.key);
            break;
        case 6:
            addNumberKey(e.key);
            break;
        case 7:
            addNumberKey(e.key);
            break;
        case 8:
            addNumberKey(e.key);
            break;
        case 9:
            addNumberKey(e.key);
            break;
    }
})

// Backspace and Delete key's delete most recent button/key entry.
document.addEventListener('keydown', function(e) {
    if (e.key == 'Backspace' || e.key == 'Delete') {
        backspace();
    }
})

// Swaps entered number to either positive or negative.
posNeg.addEventListener('click', function() {
    if (currentDisplay.textContent == 0) {
        return;
    } else if (currentDisplay.textContent < 0) {
        console.log('test');
        currentDisplay.textContent = Math.abs(currentDisplay.textContent);
    } else if (currentDisplay.textContent > 0) {
        currentDisplay.textContent = -Math.abs(currentDisplay.textContent);
    }
})



// Adds current display number to calcArray and runs the equation in the array.
function displayTotal() {
    calcArray.push(currentDisplay.textContent);
    let operator = "";
    let answer = "";
    for (i = 0; i < calcArray.length; i++) {
        if (calcArray[i] === "+" || calcArray[i] === "-" || calcArray[i] === "/" || calcArray[i] === "x") {
            operator = calcArray[i];
        } else {
            if (answer == "") {
                answer = calcArray[i];
            } else if (calcArray[i] == 0 && operator === "/") {
                return currentDisplay.textContent = "Fatality by Zero";
            } else {
                answer = operate(answer, calcArray[i], operator);
            }
        }
    }
    answer = checkAnswerSize(answer);
    answer = Math.round(answer * 100000000000) / 100000000000;
    if ((answer.toString().length) > 13) {
        answer = answer.toExponential(7);
    };
    currentDisplay.textContent = answer;
    operatorDisplay.textContent = "=";
    calcArray = [];
}


function addition(firstNumber, secondNumber) {;
    return (firstNumber + secondNumber);
}

function subtraction(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function multiplication(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function division(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
}

function operate(firstNumber, secondNumber, operator) {
    let first = parseFloat(firstNumber);
    let second = parseFloat(secondNumber);
    switch (operator) {
        case "+" :;
            return addition(first, second);
        case "-" :
            return subtraction(first, second);
        case "x" :
            return multiplication(first, second);
        case "/" :
            return division(first, second);
    }
}

// Deals with adding the input numbers to the display.
function addInputCurrentDisplay() {
    displayText = operatorDisplay.textContent;
    if (displayText.slice(displayText.length - 1) == "=") {
        currentDisplay.textContent = "";
        updateDisplay(this.textContent);
        operatorDisplay.textContent = '';
    } else if (currentDisplay.textContent.length > 12) {
        return;
    } else if (currentDisplay === "") {
        updateDisplay(this.textContent);
    } else {
        let newNumber = currentDisplay.textContent + this.textContent;
        updateDisplay(newNumber);
    }
}

function addDecimalCurrentDisplay() {
    if (currentDisplay.textContent.includes(".")) {
        return;
    }else if (currentDisplay === "") {
        updateDisplay(this.textContent);
    } else {
        let newNumber = currentDisplay.textContent + this.textContent;
        updateDisplay(newNumber);
    }
}

function updateDisplay(num) {
    document.getElementById("display").innerHTML = num;
}

function clearDisplay() {
    currentDisplay.innerHTML = "";
    operatorDisplay.innerHTML = "";
}

function backspace() {
    let displayCopy = currentDisplay.textContent;
    let newDisplay = displayCopy.slice(0, (displayCopy.length - 1));
    currentDisplay.innerHTML = newDisplay;
}

function resetCalc() {
    calcArray = [];
}


// Displays error if answer is greater than the max number that can be displayed.
function checkAnswerSize(answer) {
    if (answer > 99999999999999) {
        return "Error";
    } else {
        return answer;
    }
}


// Adds number key press to display.
function addNumberKey(numKey) {
    if (currentDisplay.textContent.length > 12) {
        return;
    } else if (currentDisplay === "") {
            updateDisplay(numKey);
    } else {
        let newNumber = currentDisplay.textContent + numKey;
        updateDisplay(newNumber);
    }
}

