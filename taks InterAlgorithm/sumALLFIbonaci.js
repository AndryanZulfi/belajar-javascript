function sumFibs(num) {
    let f0 = 0, f1=1, next = 0,result = 0
    for(let i =1; i<num; i++){
      if(f1 % 2 ==1 && f1<=num){
        result += f1
      }
      next = f0 + f1
      f0= f1
      f1 =next
    }
    // console.log(f1)
    
    
   return result
  
    // return sum;
  }
  
  console.log(sumFibs(75025)); 
  