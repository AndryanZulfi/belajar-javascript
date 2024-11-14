function frankenSplice(arr1, arr2, n) {
   // Salin arr2 agar tidak mengubah array asli
   let hasilArray = arr2.slice();
    
   // Sisipkan elemen arr1 ke dalam hasilArray pada indeks n
   hasilArray.splice(1, 0, ...arr1);
   
   return hasilArray;
  }
  
  console.log(
    frankenSplice([1, 2, 3], [4, 5, 6], 1))