function uniteUnique(...arr) {
    let newArr = []
    arr.map(el => { el.forEach(arr => {
        newArr.push(arr)
    })
    })

    // let newSet = [...new Set(newArr)]
    // return newSet
    return newArr
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));