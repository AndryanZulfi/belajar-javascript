function whatIsInAName(collection, source) {
    const keys = Object.keys(source)
    return collection.filter(el => keys.every(key => el[key] === source[key]))
  }
  
  console.log(
    whatIsInAName(
        [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }
    ))