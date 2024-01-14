//  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number) {
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
//solution(10);

//  A function that takes an array and moves all of the zeros to the end,
//  preserving the order of the other elements, and returns the array.
function moveZeros(arr) {
	//const newArr = [];
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
	// for (let i = 1; i < arr.length; i++) {

	// }
	// console.log(arr.length);
	//const newArr = arr.map(x => {x === 0 ?  zerosArr.push(x) : })

	// .map(element =>
	//     arr.filter(element => (element === 0), zerosArr.push(element):(newArr.push(element));})
	// })

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] === 0) {
	// 		zerosArr.push(arr[i]);
	// 	} else {
	// 		newArr.push(arr[i]);
	// 	}
	// }
	// console.log(newArr.concat(zerosArr));
	// return newArr;
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
