function checkCashRegister(price, cash, cid) {
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    let changeDue = cash - price;  // Jumlah kembalian yang harus diberikan
    let change = [];
    let totalInDrawer = 0;
  
    // Hitung total uang yang ada di kasir (cid)
    for (let i = 0; i < cid.length; i++) {
      totalInDrawer += cid[i][1];
    }
  
    // Jika uang di kasir kurang dari yang dibutuhkan
    if (totalInDrawer < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    // Jika uang di kasir persis sama dengan yang dibutuhkan
    if (totalInDrawer === changeDue) {
      return {status: "CLOSED", change: cid};
    }
  
    // Hitung kembalian yang bisa diberikan dengan urutan mata uang tertinggi ke terendah
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let coinName = currencyUnit[i][0];
      let coinValue = currencyUnit[i][1];
      let coinAmount = cid[i][1];
      
      // Menghitung berapa banyak unit uang yang dapat digunakan untuk memberi kembalian
      let changeForCoin = 0;
      while (changeDue >= coinValue && coinAmount > 0) {
        changeForCoin += coinValue;
        changeDue -= coinValue;
        coinAmount -= coinValue;
  
        // Membulatkan untuk menghindari masalah floating-point
        changeDue = changeDue.toFixed(2);
      }
  
      // Jika kembalian menggunakan unit ini, tambahkan ke dalam kembalian
      if (changeForCoin > 0) {
        change.push([coinName, changeForCoin]);
      }
    }
  
    // Jika setelah semua langkah masih ada perubahan yang perlu diberikan
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    // Periksa apakah uang yang ada di kasir lebih banyak daripada yang dibutuhkan
    // dan apakah kembalian yang diberikan tepat
    return {status: "OPEN", change: change};
  }
  