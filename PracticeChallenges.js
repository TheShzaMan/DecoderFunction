//  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solutionA(number) {
	let sumResult = 0;

	if (number <= 0) return 0;
	else {
		for (let i = 1; i < number; i++) {
			if (i % 3 == 0 || i % 5 == 0) {
				sumResult += i;
			}
		}
	}
	return sumResult;
}
//solutionA(10);

//  A function that takes an array and moves all of the zeros to the end,
//  preserving the order of the other elements, and returns the array.
function moveZeros(arr) {
	const zeros = [];
	const newArr = arr
		.filter((x) => {
			if (x !== 0) {
				return true;
			} else {
				zeros.push(x);
				return false;
			}
		})
		.concat(zeros);
	console.log(newArr);
	return newArr;
}
// moveZerosA([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0])

// Same result as moveZeros() but different logic to get there
function moveZerosA(arr) {
	const newArr = arr.filter((item) => item !== 0);

	for (let i = 0; i <= arr.length - newArr.length; i++) {
		newArr.push(0);
	}
	console.log(newArr);
}
//moveZerosA([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0])

//Function that must return true or false depending upon whether the given number
//is a Narcissistic number(the sum of its digits raised to the 'n'th, where n is the number of digits).

function narcissistic(value) {
	const valueArr = [...String(value)];
	const n = valueArr.length;
	let numberToCheck = 0;
	const narci = valueArr.map((digit) => Math.pow(digit, n));
	for (let i = 0; i < narci.length; i++) {
		numberToCheck += narci[i];
	}
	isNarci = numberToCheck === value ? true : false;
	console.log(isNarci);
	return isNarci;
}
//narcissistic(153);

//Create a function that takes a Roman numeral as its argument and returns its value as
// a numeric decimal integer.
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman) {
	//  M + (M-C) +  L + X + X + X + I + I

	const numArr = [...roman].map((rom) => {
		switch (rom) {
			case "M":
				return 1000;
			case "D":
				return 500;
			case "C":
				return 100;
			case "L":
				return 50;
			case "X":
				return 10;
			case "V":
				return 5;
			case "I":
				return 1;
		}
	});
	let number = 0;
	for (let i = 0; i < numArr.length; i++) {
		numArr[i] >= numArr[i + 1] || i === numArr.length - 1
			? (number += numArr[i])
			: (number -= numArr[i]);
	}
	console.log(number);
	//console.log(numArr.reduce((p, c) => p + c, 0));
	return 0;
}
solution("MD");
solution("MCMLXXXII");
