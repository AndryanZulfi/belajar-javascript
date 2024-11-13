function cek(variabel){
    if(variabel != '99'){
    return "Not Equal";
    }
    return 'Equal';
}
console.log(cek(10));


function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  console.log(testGreaterThan(101))

  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 25 && val <= 25) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
console.log(testLogicalAnd(0));