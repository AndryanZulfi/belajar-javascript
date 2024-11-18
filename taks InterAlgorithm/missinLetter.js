function fearNotLetter(str) {
    const word = "abcdefghijklmnopqrstuvwxyz";
    return word !== str ? word.split('').filter(el => {
        return  !str.split('').includes(el) 
    }) : undefined

  }
  
  console.log(fearNotLetter("abcdefghijlmnoqrsuvwxyz"))

 
// function fearNotLetter(str) {
//     const word = "abcdefghijklmnopqrstuvwxyz";
//     let regex = new RegExp(`[${str[0]}-${str[str.length - 1]}]`, "g");

//     const fullRange = word.match(regex);

//     const missingLetters = fullRange.filter(el => !str.includes(el));

//     return missingLetters.length ? missingLetters[0] : undefined;
// }

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Output: undefined
// console.log(fearNotLetter("abce")); // Output: 'd'
