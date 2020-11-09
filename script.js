var numberButton = document.querySelectorAll(".number");

for (i=0; i<10; i++) {
    numberButton[i].addEventListener("click", addInputCurrentDisplay);
}

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
            addition(firstNumber, secondNumber);
        case "-" :
            subtraction(firstNumber, secondNumber);
        case "*" :
            multiplication(firstNumber, secondNumber);
        case "/" :
            division(firstNumber, secondNumber);
    }
}

function addInputCurrentDisplay(numberClicked) {
    currentDisplay = document.getElementById("display");
    if (currentDisplay === " ") {
        currentDisplay.innerHTML = this.textContent;
    } else {
        let newNumber = currentDisplay.textContent + this.textContent;
        currentDisplay.innerHTML = newNumber;
    }
}