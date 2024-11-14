function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b)

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= num){
            return i;
        }
    }
    return arr
  }
  
  console.log(
    getIndexToIns([3, 10, 5], 3)

)