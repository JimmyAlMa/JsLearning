// Boolean

const isTall = true;
const canCook = true;
const hasSiblings = true;

// Conditional Statements

const isSoldOut = false;
if (isSoldOut) {
  console.log("Produk sudah habis");
} else {
  console.log("Produk masih tersedia");
}

if (2 !== 1) {
    console.log('Benar')
} else {
    console.log('Salah')
}

// comparison operators

console.log(10 > 5); // Besar dari
console.log(8 < 4); // Kecil dari
console.log(-1 >= 2); // Besar dari atau sama dengan
console.log(0.5 <= 0); // Kecil dari atau sama dengan
console.log('abc' === 'abc'); // Sama dengan
console.log(false !== true); // Tidak sama dengan
console.log('   ')
console.log('cab' === 'cba');
console.log(false !== false);
console.log('   ');
// else if statement

const value = 52562;
if (value < 10) {
    console.log('Satuan');
} else if (value < 100) {
    console.log('Puluhan');
} else if (value < 1000) {
    console.log('Ratusan')
} else {
    console.log(value);
}