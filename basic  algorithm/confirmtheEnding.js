function confirmEnding(str, target) {
    // return str.substring(str.length - target.length,Infinity) == target
    return str.slice(-target.length) == target
  }
  
  console.log(confirmEnding("Bastian", "n"))