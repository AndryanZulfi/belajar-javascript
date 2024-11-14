function mutation(arr) {
    return  arr[1].toLowerCase().split('').every(el => arr[0].toLowerCase().includes(el))
  }
  
  console.log(
    mutation(["hell0hjgjgffo", "Hello"])

  )