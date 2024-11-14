function findElement(arr, func) {
    //  return arr.find(el => func(el))
    let i =0
    // Jika menggunakan while loop
    while(i<arr.length){
        if(func(arr[i])){
            return arr[i]
            break;
        }
        i++
    }

  }


  
  
  console.log(
    findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0))