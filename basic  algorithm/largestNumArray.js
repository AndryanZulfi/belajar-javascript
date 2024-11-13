// one liner coyyy
// function largestOfFour(arr) {
//     return arr.map(el => Math.max(...el))
  
// }

// menggunakan foreach
function largestOfFour(arr) {
    let result = []
    arr.forEach(el => {
        let numMax = -Infinity
       el.forEach(arr => {
        if(numMax < arr){
            numMax = arr
        }
       }) 
       result.push(numMax)
    })
    return result
  
}
  console.log(
    largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
)