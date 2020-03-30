//QUESTION
/* 1.	Define a function max() that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript. */

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
// TEST CASE
let maxNum = max(15, 20)
console.log("QUESTION No. 1");
console.log("EXPECTED OUTPUT = 20 AND THE RESULT IS = " + maxNum);


//QUESTION
/* 2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
// TEST CASE
let maxOf3 = maxOfThree(15, 20, 60)
console.log("QUESTION No. 2");
console.log("EXPECTED OUTPUT = 60 AND THE RESULT IS = " + maxOf3);

//QUESTION
/* 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and 
returns true if it is a vowel, false otherwise. */

function isVowel(str) {
    let vowelArr = ["a", "e", "i", "o", "u"];
    let toReturn = false;
    vowelArr.forEach(function (item) {
        if (item === str) {
            toReturn = true;
        }
    });
    return toReturn;
}
// TEST CASE
let v1 = isVowel("r");
let v2 = isVowel("o");
console.log("QUESTION No. 3");
console.log("EXPECTED OUTPUT = false AND THE RESULT IS = " + v1);
console.log("EXPECTED OUTPUT = true AND THE RESULT IS = " + v2);

//QUESTION
/* 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) 
all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, 
and multiply([1,2,3,4]) should return 24. Note/Hint: 
Do these using Imperative programming approach (i.e. for…loop or while…loop) */

function sum(arr) {
    let sum = 0;
    arr.forEach(function (item) {
        sum += item;
    });
    return sum;
}

// TEST CASE
let arr = [1, 2, 3, 4];
let arrSum = sum(arr);
console.log("QUESTION No. 4 a");
console.log("EXPECTED OUTPUT = 10 AND THE RESULT IS = " + arrSum);

function multiply(arr) {
    let product = 1;
    arr.forEach(function (item) {
        product *= item;
    });
    return product;
}

// TEST CASE
let arr2 = [1, 2, 3, 4];
let arrMult = multiply(arr2);
console.log("QUESTION No. 4 b");
console.log("EXPECTED OUTPUT = 24 AND THE RESULT IS = " + arrMult);


//QUESTION
/* 5.	Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj". */

function reverse(strToReverse) {
    let newString = "";
    for (let i = strToReverse.length; i >= 0; i--) {
        newString = newString + strToReverse.charAt(i);
    }
    return newString;
}
// TEST CASE
let rev = reverse("Tadiyos Girma");
console.log("QUESTION No. 5");
console.log("EXPECTED OUTPUT = amriG soyidaT AND THE RESULT IS = " + rev);

//QUESTION
/* 6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */

function findLongestWord(arr) {

    let longest = arr[0];
    let indexOfLongest = 0;
    arr.forEach(function (item, index) {
        if (item.length > longest.length) {
            longest = arr[index];
        }
    });
    return longest;
}
// TEST CASE
let arrOfWords = ["this", "is", "a", "test", "environment", "."]
let longestWord = findLongestWord(arrOfWords);
console.log("QUESTION No. 6");
console.log("EXPECTED OUTPUT = environment AND THE RESULT IS = " + longestWord);

//QUESTION
/* 7.	Write a function filterLongWords() that takes an array of words and an integer i 
and returns a new array containing only those words that were longer than i characters. */

function filterLongWords(arr, WrodLength) {

    let arrOfLongWords = [];
    arr.forEach(function (item) {
        if (item.length > WrodLength) {
            arrOfLongWords.push(item);
        }
    });
    return arrOfLongWords;
}
// TEST CASE
let arrOfLongWords = ["this", "is", "a", "test", "environment", "."]
let longestWordThenX = filterLongWords(arrOfWords, 2);
console.log("QUESTION No. 7");
console.log("EXPECTED OUTPUT = this,test,environment AND THE RESULT IS = " + longestWordThenX);


/* 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers 
and calculates and returns the sum of the squares of each number in the input array. 
E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: 
Write your Javascript code without using Imperative programming. 
i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.*/

function computeSumOfSquares(arr) {

    let sum = 0;
    arr.forEach(function (item) {
        sum += Math.pow(item, 2);
    })
    return sum;
}
// TEST CASE
let arrOfNumbers = [1, 2, 3];
let sumOfSquares = computeSumOfSquares(arrOfNumbers);
console.log("QUESTION No. 8");
console.log("EXPECTED OUTPUT = 14 AND THE RESULT IS = " + sumOfSquares);

/* 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers 
and it finds and prints only the numbers which are odd.*/

function printOddNumbersOnly(arr) {

    arr.forEach(function (item) {
        if (item % 2 > 0) {
            console.log(item);
        }
    })
}
let arrOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("QUESTION No. 9");
printOddNumbersOnly(arrOfNumbers2);

/* 10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers 
and calculates and returns the sum of the squares of only the even numbers in the input array. 
E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/

function computeSumOfSquaresOfEvensOnly(arr) {

    let sum = 0;
    arr.forEach(function (item) {
        if (item % 2 === 0) {
            sum += Math.pow(item, 2);
        }
    });
    return sum;
}
let arrOfNumbers3 = [1, 2, 3, 4, 5];
console.log("QUESTION No. 10");
console.log("EXPECTED OUTPUT = 20 AND THE RESULT IS = " + computeSumOfSquaresOfEvensOnly(arrOfNumbers3));

//QUESTION
/* 11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
(defined in Problem 4 above) without using Imperative programming. 
i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach. */

function sum2(arr) {
    let sum = arr.reduce(function (prevValue, item, i, array) {
        return prevValue + item;
    })
    return sum;
}

// TEST CASE
let arr4 = [1, 2, 3, 4];
let arrSum2 = sum2(arr4);
console.log("QUESTION No. 11 a");
console.log("EXPECTED OUTPUT = 10 AND THE RESULT IS = " + arrSum2);

function multiply2(arr) {
    let product = arr.reduce(function (prevValue, item, i, array) {
        return prevValue * item;
    })
    return product;
}

// TEST CASE
let arr3 = [1, 2, 3, 4];
let arrMult2 = multiply2(arr2);
console.log("QUESTION No. 11 b");
console.log("EXPECTED OUTPUT = 24 AND THE RESULT IS = " + arrMult2);

//QUESTION
/* 12.	Implement Javascript code for a function named, findSecondBiggest, 
which takes as input, an array of numbers and finds and returns the second biggest of the numbers. 
For example, findSecondBiggest([1,2,3,4,5]) should return 4. And 
findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!) */

function findSecondBiggest(arr) {

    let biggest = arr[0];
    let secondBiggest = arr[1];

    arr.forEach(function (item) {

        if (item >= biggest) {
            biggest = item;
        }

        else if (item > secondBiggest) {
            secondBiggest = item;
        }

        if (biggest < secondBiggest) {
            let temp = secondBiggest;
            secondBiggest = biggest;
            biggest = temp;
        }
    });
    return secondBiggest;
}
// TEST CASE
let arrBiggest = [19, 9, 11, 0, 12];
let SecondBiggestNo = findSecondBiggest(arrBiggest);
console.log("QUESTION No. 12");
console.log("EXPECTED OUTPUT = 12 AND THE RESULT IS = " + SecondBiggestNo);

//QUESTION
/* 13.	Write a function named printFibo, that takes as input, a given length, n, 
and any two starting numbers a and b, and it prints-out the Fibonacci sequence, 
e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. 
(e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), 
prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; 
printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and 
printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */

function printFibo(n, a, b) {

    let outPut = [];
    if (n === 0 || n === 1) {
        outPut.push("0");
    }
    else {
        outPut.push(a);
        outPut.push(b);
        for (let i = 2; i < n; i++) {
            c = a + b;
            outPut.push(c);
            a = b;
            b = c;
        }
    }
    return outPut;
}
// TEST CASE
let listOfFibo = printFibo(10, 0, 1);
console.log("QUESTION No. 13");
console.log("EXPECTED OUTPUT = 0,1,1,2,3,5,8,13,21,34 AND THE RESULT IS = " + listOfFibo);