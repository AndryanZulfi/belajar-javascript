function sumPrimes(num) {

    let prime = []
    nextPrime:
    for(let i = 2; i <= num; i++){
        console.log(i)
        for(let j = 2; j < i; j++){
            if(i%j == 0) continue nextPrime;
        }
        prime.push(i)
    }
    return prime.reduce((acc, el)=> acc+el)
  }
  
  console.log(sumPrimes(10));