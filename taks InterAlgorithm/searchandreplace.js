function myReplace(str, before, after) {
    // return str.split(' ').map(kata => kata.charAt(0).toUpperCase() + kata.slice(1))
    // if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    //     return str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
    // }else{
    //     return str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
    // }
    return str.replace(before, /^[A-Z]/.test(before) ? after[0].toUpperCase() + after.slice(1) : after.toLowerCase())
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"))