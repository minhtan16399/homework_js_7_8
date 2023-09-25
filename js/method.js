// số nguyên 
function integerNumber(number) {
    let number1 = number * 10 % 10;
    let number2 = number / number;
    if (number1 == 0 && number2 == 1 || number == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

// số chẵn 
function evenNumber(number) {
    if (number % 2 == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

// số nguyên tố 
function primeNumber(number) {
    for (var number1 = 1, divisor = 0; number1 <= number; number1++) {
        if (number % number1 === 0) {
            divisor++;
        }
    }
    if (divisor == 2) {
        result = true;
    } else {
        result = false;
    }
    return result;
};


