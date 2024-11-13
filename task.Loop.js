// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i]. length; j++){
//             product = product * arr[i][j];
//         }
//     }
//     // Only change code above this line
//     return product;
//   }
  
//   console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }

// const ourArray = [];
// let i = 0;

// do {
//     ourArray.push(i);
//     i++;
// }while(i < 5);

// console.log(ourArray);

// const ourArray = [];
// let i = 0;

// do {
//   ourArray.push(i);
//   i++;
// } while (i < 5);

// console.log(ourArray)


// const myArray = [];
// let i = 10;

// // Only change code below this line
// function multiply(arr, n) {
//     if (n <= 0) {
//       return 0;
//     } else {
//       return multiply(arr, n-1) + arr[n - 1];
//     }
//   }
// console.log(multiply([2, 3, 4, 5], 3));

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
// console.log(contacts.length);
//   // Only change code below this line
//   for(let i = 0;i<contacts.length; i++){  
//     if(contacts[i].firstName == name){
//       if(contacts[i].hasOwnProperty(prop)){
//         return contacts[i][prop];
//       }else{
//         return 'No such Property';
//       }
//     }
//   }
//   return 'No such contact';
// }
//   // Only change code above this line


// console.log(lookUpProfile("Akira", "address"));



// function randomFraction() {

//   // Only change code below this line

//   return Math.floor(Math.random() * 5);

//   // Only change code above this line
// }

// console.log(randomFraction())

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin +1)) + myMin
// }
// console.log(randomRange(10,18))

// function countdown(e,n){
//   if(n < e){
//     return [];
//   }else{
//     let countArray = countdown(e, n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countdown(1,5));

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum){
//     return []
//   }else {
//     let countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// };

// console.log(rangeOfNumbers(1, 5));

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 1) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // console.log(i);

// function checkScope() {
//   var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// console.log(i);
// }
// console.log(checkScope());

// let printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     let i = 'function scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };

// Object.freeze(obj)
// obj.review = 'bad';

// // console.log(obj)

// const sum = (...args) => {
//   let total = 0;
//   for(let i = 0; i<args.length; i++){
//     total += args[i]
//   }
//   return total;
// }

// console.log(sum(0,1,2))

// function removeFirstTwo(list) {
//   const [a, b , ...source] = list;
//   return source;
//   // return list;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo)

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const {max,min} = stats;
// console.log({max, min})
// // Only change code above this line


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for(let i = 0; i < arr.length; i++){
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList);

const user = {
  name: 'Andryan',
  setName(newName){
    user.name = newName
  }
}

user.setName('Zulfi');
console.log(user.name)