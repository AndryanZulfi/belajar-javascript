let quoteSample = "3 blind mice.";
let myRegex = /[^3]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)