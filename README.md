# DecoderFunction
A function written in JavaScript as a solution to a skills assessment question that takes in a .txt file that is an encoded secret pharse as a string where each line contains only a number and a word, example: 

235 pug
7 happy
19 loves
137 digital
58 little
200 ball

The list can be of any size but every line will have one number and one word.

To decode the phrase, the function must sort the lines into numerical order and then create a new list of these lines where each element contains one more line than the element before it, [[a], [b,c], [d,e,f] ...] starting with the first element containing a single line with the lowest number.  Using the example above the new list would be: 

7
19 58
137 200 235

Next, the last element of each line is collected and is put into a new list. Finally, the word associated with each number in the final list is returned as a string. For our example the last number of each line would be, 7 58 and 235 and the decoded string is 'happy little pug'.  

