var numberButton = document.querySelectorAll(".number");

var clearButton = document.getElementById("clear");

var currentDisplay = document.getElementById("display");

var backspaceButton = document.getElementById("backspace");

for (i=0; i<10; i++) {
    numberButton[i].addEventListener("click", addInputCurrentDisplay);
}

clearButton.addEventListener("click", clearDisplay)

backspaceButton.addEventListener("click", backspace);

function addition(firstNumber, secondNumber) {
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
    switch (operator) {
        case "+" :
            return addition(firstNumber, secondNumber);
        case "-" :
            return subtraction(firstNumber, secondNumber);
        case "*" :
            return multiplication(firstNumber, secondNumber);
        case "/" :
            return division(firstNumber, secondNumber);
    }
}

function addInputCurrentDisplay(numberClicked) {
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