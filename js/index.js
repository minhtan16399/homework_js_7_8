var arrayOutput = [];

// question0 
// document.getElementById('btn-add-array').onclick = function () {
//     var addArrayNumber = +document.getElementById('array-input').value;
//     var number1 = 0;
//     var number2 = 0;
//     number1 = addArrayNumber * 10 % 10;
//     number2 = addArrayNumber / addArrayNumber;

//     if (number1 === 0 && number2 === 1 || addArrayNumber === 0) {
//         arrayOutput.push(addArrayNumber);
//     } else {
//         alert('Số nhập vào phải là số nguyên')
//     };

//     document.getElementById('array-number').innerHTML = arrayOutput;
// };
document.getElementById('btn-add-array').onclick = function () {
    var addArrayNumber = +document.getElementById('array-input').value;
    let input = integerNumber(addArrayNumber);

    if (input === true) {
        arrayOutput.push(addArrayNumber);
    } else {
        alert('Số nhập vào phải là số nguyên')
    };

    document.getElementById('array-number').innerHTML = arrayOutput;
};

// question 1 
document.getElementById('btn-sum').onclick = function () {
    let sum = 0;
    for (let index = 0; index < arrayOutput.length; index++) {
        if (arrayOutput[index] > 0) {
            sum = sum + arrayOutput[index];
        } else {
            sum = sum;
        }
    };
    document.getElementById('sumArray').innerHTML = sum;
};

// question 2 
document.getElementById('btn-count').onclick = function () {
    let count = 0;
    for (let index = 0; index < arrayOutput.length; index++) {
        if (arrayOutput[index] >= 0) {
            count = count + 1;
        } else {
            count = count;
        }
    };
    document.getElementById('countArray').innerHTML = count;
};

// question 3 
document.getElementById('btn-find-smallest-number').onclick = function () {
    let smallestNumber = 0;
    let sortArray = arrayOutput.slice(0);
    for (let index = 0; index < sortArray.length; index++) {
        sortArray.sort(function (a, b) { return a - b });
    };
    smallestNumber = sortArray[0];
    document.getElementById('findNumberArray').innerHTML = smallestNumber;
};

// question 4
document.getElementById('btn-find-smallest-positive-number').onclick = function () {
    let smallestPositiveNumber = 0;
    let fillerNumber = [];
    let sortArray = arrayOutput.slice(0);
    for (let index = 0; index < sortArray.length; index++) {
        sortArray.sort(function (a, b) { return a - b });
    };
    fillerNumber = sortArray.filter((arrayOutput) => arrayOutput > 0);
    smallestPositiveNumber = fillerNumber[0];
    document.getElementById('findPositiveNumberArray').innerHTML = smallestPositiveNumber;
};

// question 5
document.getElementById('btn-find-last-double-number').onclick = function () {
    let lastNumber = 0;
    let lastDoubleNumber = -1;
    for (let index = 0; index < arrayOutput.length; index++) {
        lastNumber = arrayOutput[index];
        let lastInputNumber = evenNumber(lastNumber);
        if (lastInputNumber === true) {
            lastDoubleNumber = lastNumber;
        }
    }
    document.getElementById('findLastDoubleNumberArray').innerHTML = lastDoubleNumber;
};

// question 6
document.getElementById('btn-change-index-array').onclick = function () {
    let changeArray = []
    changeArray = arrayOutput.slice(0);
    let inputIndex1 = +document.getElementById('inputIndex1').value;
    let inputIndex2 = +document.getElementById('inputIndex2').value;
    let index = -1;
    changeArray[index] = changeArray[inputIndex2];
    changeArray[inputIndex2] = changeArray[inputIndex1];
    changeArray[inputIndex1] = changeArray[index];
    document.getElementById('change-array-number').innerHTML = changeArray;
};

// question 7 
document.getElementById('btn-sort-up-array').onclick = function () {
    let sortUpArray = arrayOutput.slice(0);
    for (let index = 0; index < sortUpArray.length; index++) {
        sortUpArray.sort(function (a, b) { return a - b });
    };
    document.getElementById('sort-up-array-number').innerHTML = sortUpArray;
};

// question 8
document.getElementById('btn-find-first-prime-number').onclick = function () {
    let firstNumber = 0;
    let firstPrimeNumber = -1;
    for (let index = 0; index < arrayOutput.length; index++) {
        firstNumber = arrayOutput[index];
        let firstInputNumber = primeNumber(firstNumber);
        if (firstInputNumber === true) {
            firstPrimeNumber = firstNumber;
            break;
        }
    }
    document.getElementById('findFirstPrimeNumberArray').innerHTML = firstPrimeNumber;
};

// question 9
var arrayRealOutput = [];
document.getElementById('btn-add-real-array').onclick = function () {
    let addArrayRealNumber = +document.getElementById('array-real-input').value;
    arrayRealOutput.push(addArrayRealNumber);
    document.getElementById('array-real-number').innerHTML = arrayRealOutput;
};
document.getElementById('btn-find-integer-number').onclick = function () {
    let sumIntegerNumber = 0;
    for (let index = 0; index < arrayRealOutput.length; index++) {
        let inputNumber = integerNumber(arrayRealOutput[index]);
        if (inputNumber === true) {
            sumIntegerNumber++
        }
    }
    document.getElementById('find-integer-number').innerHTML = sumIntegerNumber;
};

// question 10 
document.getElementById('btn-compare-number').onclick = function () {
    let iconLessThan = document.getElementById('less-than');
    let iconGreaterThan = document.getElementById('greater-than');
    let iconEqual = document.getElementById('equal');
    let countPositiveNumber = 0;
    let countNegativeNumber = 0;
    for (let index = 0; index < arrayOutput.length; index++) {
        if (arrayOutput[index] > 0) {
            countPositiveNumber ++;
        } else if (arrayOutput[index] < 0) {
            countNegativeNumber++;
        } else {
            countPositiveNumber ++;
            countNegativeNumber++;
        };
    };
    document.getElementById('countPositiveNumberArray').innerHTML = countPositiveNumber + ' số dương ';
    document.getElementById('countNegativeNumberArray').innerHTML = countNegativeNumber + ' số âm ';
    if (countPositiveNumber > countNegativeNumber) {
        iconGreaterThan.style.display = 'block';
        iconLessThan.style.display = 'none';
        iconEqual.style.display = 'none';
    } else if (countNegativeNumber > countPositiveNumber) {
        iconGreaterThan.style.display = 'none';
        iconLessThan.style.display = 'block';
        iconEqual.style.display = 'none';
    } else {
        iconGreaterThan.style.display = 'none';
        iconLessThan.style.display = 'none';
        iconEqual.style.display = 'block';
    };
};














