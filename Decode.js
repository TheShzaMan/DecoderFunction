const fs = require("fs");

function decode(message_file) {
	//creating an array where each element is a separate line of the message
	const arrayOfMsgLines = message_file.split("\n");

	//creating a dictionary object from each line with the number as a key and the word as the value
	const codeMap = arrayOfMsgLines.map((line) => {
		var [key, value] = line.split(" ");
		//converting the string representation of the number to a numerical one
		key = parseInt(key, 10);
		return { key: key, value: value };
	});

	//creating an array of the keys
	const linesKeys = codeMap.map((line) => {
		return line.key;
	});

	//sorting the keys in ascending order
	const sortedKeys = linesKeys.sort((a, b) => a - b);

	//looping through the sortedKeys creating a new array with each element being an array that is one element larger than the array before it
	const keysPyramid = [];
	while (sortedKeys.length >= keysPyramid.length + 1) {
		var pyramidLineCount = keysPyramid.length + 1;
		var pyramidLine = [];
		for (let i = 0; i < pyramidLineCount; i++) {
			var numberToMove = sortedKeys.shift();
			pyramidLine.push(numberToMove);
		}
		keysPyramid.push(pyramidLine);
	}

	//Collecting the last number from each line
	const lastNumbers = keysPyramid.map((line) => {
		return line[line.length - 1];
	});

	//Finding each number's key/value pair
	var decodedMessage = lastNumbers.map((number) => {
		const keyPair = codeMap.find((line) => line.key === number);
		return keyPair.value;
	});

	//Converting decodedMessage to a string
	decodedMessage = decodedMessage.join(" ");

	console.log(lastNumbers);
	console.log(decodedMessage);

	return decodedMessage;
	//console.log(message_file);
}

const filePath = "coding_qual_input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
	if (err) {
		console.warn("Error reading the file:", err);
		return;
	}
	decode(data);
});
//decode();
