function cariKataTerpanjang(kalimat) {
    // Memisahkan kalimat menjadi array kata-kata
    let kataArray = kalimat.split(" ");
    
    // Mencari kata terpanjang
    let kataTerpanjang = "";
    
    for (let kata of kataArray) {
      if (kata.length > kataTerpanjang.length) {
        kataTerpanjang = kata;
      }
    }
    
    return kataTerpanjang;
  }
  
  console.log(cariKataTerpanjang("Saya suka belajar pemrograman")); 
  // Output: "pemrograman"
