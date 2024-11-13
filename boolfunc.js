let count = 0;

function cc(card) {
  // Only change code below this line
 if(card == 2 || card == 3 || card == 4 || card == 5 ||  card == 6){
    count += 1;
  }else if(card == 7 || card == 8 || card == 9){
    count += 0;
  }else if(card == 10 || card == 'J' || card == 'Q' ||   card =='K' || card == 'A'){
    count -= 1;
  }else{
    return "Change Me";
  }

 

  // Only change code above this line
}
 if (count++){
    console.log(count + ' Bet');
  }else if(count - 1 || count == count){
    console.log(count + ' Hold');
  }
cc(3); cc(7); cc('Q'); cc(8); cc('A');
console.log(count)