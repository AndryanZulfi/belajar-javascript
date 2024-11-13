function largestOfFour(arr) {
    let terbesar = -Infinity
    let newArr = []
    for(let nilai of arr){
        // console.log(nilai)
        for(let nilai2 of nilai){
            if(nilai2 > terbesar){
                terbesar = nilai2
            }
        }
        newArr.push(terbesar)
        terbesar = -Infinity
    }
    return newArr;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));