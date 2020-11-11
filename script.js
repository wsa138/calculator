var numberButton = document.querySelectorAll(".number");

var clearButton = document.getElementById("clear");

var currentDisplay = document.getElementById("display");

var backspaceButton = document.getElementById("backspace");

var operatorButton = document.getElementsByClassName("operator");

var equalsButton = document.getElementById("equals");

var operatorDisplay = document.getElementById("operatorDisplay");

// Array that holes all numbers and operators entered into calculator.
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
        calcArray.push(currentDisplay.textContent);
        calcArray.push(this.textContent);
        clearDisplay();
        let calcLength = calcArray.length;
        if (calcArray[calcLength - 1] === this.textContent) {
            operatorDisplay.textContent = this.textContent;
        }
    })
}

// Event listener on equals button provides the answer to answer equation.
equalsButton.addEventListener("click", function() {
    calcArray.push(currentDisplay.textContent);
    let operator = "";
    let answer = "";
    for (i = 0; i < calcArray.length; i++) {
        if (calcArray[i] === "+" || calcArray[i] === "-" || calcArray[i] === "/" || calcArray[i] === "x") {
            operator = calcArray[i];
        } else {
            if (answer == "") {
                answer = calcArray[i];
            } else {
                answer = operate(answer, calcArray[i], operator)
            }
        }
    }
    currentDisplay.textContent = answer;
    operatorDisplay.textContent = "=";
    calcArray = [];
})





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

function addInputCurrentDisplay() {
    if (currentDisplay === " ") {
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
}

function backspace() {
    let displayCopy = currentDisplay.textContent;
    let newDisplay = displayCopy.slice(0, (displayCopy.length - 1));
    currentDisplay.innerHTML = newDisplay;
}

function resetCalc() {
    oldNUmber = 0;
    oldOperator = "";
}

