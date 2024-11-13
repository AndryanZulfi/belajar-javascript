function findLongestWordLength(str) {
    let maxStr = ''
    str.split(' ').forEach(el => {
        if(maxStr.length <= el.length) {
            maxStr = el
        }
    })
    return maxStr.length
  }
  
 console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog"))