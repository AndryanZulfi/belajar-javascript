function truncateString(str, num) {
    if(str.length > num){
       return  str.slice(0, num) + '...';
    }else{
        return str.slice(0,num)
    }
  }
  
  console.log(
    truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
  )