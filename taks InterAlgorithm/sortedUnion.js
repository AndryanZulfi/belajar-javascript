function uniteUnique() {
    return [...arguments[0], ...arguments[1], ...arguments[2]]
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));