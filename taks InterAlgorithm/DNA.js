function pairElement(str) {
    // const result = []
    // str.split('').forEach((el) => {
    //     if(el === 'G') result.push(['G','C'])
    //     if(el === 'C') result.push(['C','G'])
    //     if(el === 'A') result.push(['A','T'])
    //     if(el === 'T') result.push(['T','A'])
    // })

    const pair = {
        G: 'C',
        C: 'G',
        A: 'T',
        T: 'A'
    }

    return str.split('').map(el => [el, pair[el]])
  }
  
  console.log(pairElement("TTGAG"))