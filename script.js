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

