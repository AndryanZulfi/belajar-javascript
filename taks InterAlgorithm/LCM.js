function smallestCommons(arr) {
    // Mengurutkan array
    arr.sort((a, b) => a - b);
    
    // Menentukan rentang angka dari minn hingga max
    const [min, max] = arr;
    
    // Fungsi untuk mencari KPK
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // Menghitung KPK dari semua angka dalam rentang
    let scm = min;
    for (let i = min + 1; i <= max; i++) {
        scm = lcm(scm, i);
    }
    
    return scm;
}

console.log(smallestCommons([1, 13])); 