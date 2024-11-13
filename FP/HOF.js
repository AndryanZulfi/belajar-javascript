// const hello = ()=>{
//     console.log('Hello')
// }

// const say = (someFunction) =>{
//     someFunction();
// }

// const sayHello = () =>{
//     return() =>{
//         console.log('Hello')
//     }
// }

// // sayHello(hello)

// sayHello()()

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element) => {newArray.push(callback(element))});
    // Only change code above this line
    return newArray
  };
const result = ([23, 65, 98, 5, 13].myMap(item => item * 2))
console.log(result)
