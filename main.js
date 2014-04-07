var userInput = prompt("Enter a word: ");

var lowercaseInput = userInput.toLowerCase();

var uppercaseInput = userInput.toUpperCase();

var thirdChar = userInput.charAt(2);

var subword = userInput.substring(1,4);

alert(
	"You entered: " + userInput + "\n" +
	"There are " + userInput.length + " characters in the word.\n" +
	"The third character is " + "'" + thirdChar + "'\n" +
	"Lowercase: " + lowercaseInput +"\n" +
	"Uppercase: " + uppercaseInput + "\n" +
	"I wanted a " + userInput + " since I was a little girl." + "\n" +
	"Subword: " + subword
	);