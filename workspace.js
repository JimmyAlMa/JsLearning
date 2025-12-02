// Object

const person = {
    name: 'Jomma',
    age: 26,
    birthday: 2003,
    isEmployed: true
};
console.log(person.name + ' lahir pada tahun ' + person['birthday']);

// Array

const usernames = [
    'Yandy',
    'Dimas',
    'Mita'
];
console.log('Ada total ' + usernames.length + ' username');

const newUsername = 'Yawi';
if (usernames.includes(newUsername)) {
    console.log('Username sudah digunakan');
} else {
    console.log('Username tersedia');
}

const favoriteFood = [
    'Martabak',
    'Mie ayam',
    'Pizza'
];
console.log('Makanana favoritku yang kedua adalah ' + favoriteFood[1]);