function titleCase(str) {
    return str.split(' ').map(el => {
       return el[0].toUpperCase() + el.slice(1).toLowerCase()
    }).join(' ')
  }
  
  console.log(
    titleCase("sHoRt AnD sToUt")
)