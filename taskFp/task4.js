// const squareList = arr => {
//     // Only change code below this line
//     return arr.filter((el) => Number.isInteger(el) && el > 0)
//     .reduce((acc, num) => {
//         acc.push(num ** 2)
//         return acc;
//     },[])
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])
//   console.log(squaredIntegers);
const curried = x => y => x + y
const funcForY = curried(1);
console.log(funcForY(1)); // 3