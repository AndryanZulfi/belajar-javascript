// const dogs = {
//     Fido: "Mutt",
//     Hunter: "Doberman",
//     Snoopie: "Beagle"
//   };
  
//   const myDog = "Hunter";
//   const myBreed = dogs[myDog];
//   console.log(myBreed);

//   function checkObj(obj, checkProp){
//     if(obj.hasOwnProperty(checkProp)){
//         return obj[checkProp];
//     }else{
//         return "Not Found";
//     }
//   }

//  var obj1=  checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
//  console.log(obj1)


const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

  var var1 = ourStorage.cabinet["top drawer"].folder2;
  console.log(var1);