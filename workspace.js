// Null & Undefined

const shoe = 'Converse';
const bike = 'Phoenix';
const motorcycle = 'Honda';
const car = 'Carling';
const ship = null;
const airplane = null;

//Functions

function sayMyName() {
    console.log('Jimmy');
};
sayMyName();

function number(num) {
    if (num >= 1) {
        console.log('Positive');
    } else if (num === 0) {
        console.log('Neutral');
    } else {
        console.log('Negative');
    }
};
number(-3);
number(5);
number(0);

function plus(x, y) {
    console.log(x + ' ditambah ' + y + ' sama dengan ' + (x + y));
};
plus(3, 5);
plus(15, 27);

// Return Statement

function multiply(a, b) {
    const c = a * b;
    return c;
};
const hasil = multiply(15, 83);
console.log(hasil);

// Arrow Function

function sayBye(name) {
    console.log('Bye ' + name )
};
// Menjadi!!
const sayByeArrow = name => {
    console.log('Bye ' + name)
};

function add(x, y) {
    return x + y;
};
// Menjadi!!
const addArrow = (x, y) => {
    return x + y;
};

const isAge = (name, age) => name + ' adalah umur ' + age;
console.log(isAge('Jimmy', 14));