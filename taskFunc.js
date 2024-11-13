// Understanding Undefined Value returned from a Function
// let sum = 0 

// function addThree(){
//     sum = sum + 3;
// }

// function addFive(){
//     sum = sum +5;
// }
// addThree();
// addFive();

// Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

console.log(nextInLine(testArr, 2));