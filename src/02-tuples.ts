const prices: (number | string) [] = [1,2,3,4, 'sasf'];
prices.push(1);
prices.push('1');

//Tupla define estrictamente los elementos.
//en este caso define un primer elemento string y el otro number, solo 2 elementos
// Limita el número de elementos y en cada posición define el tipo.
let user: [string, number, boolean];
// user = ['nico', 15];
//si le doy un numero falla porque está definido que sea un string
// user = [2, 15];

user = ['nico', 15, true];
const [username, age] = user;
console.log(username);
console.log(age);
