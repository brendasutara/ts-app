//se trata de no modificar el array original, sino generar nuevos estados
const numbers: ReadonlyArray<number> = [1,2,2,2];

/* numbers.push(9);
numbers.pop();
numbers.unshift(1); */

//solo me deja metodos que no cambian el estado origianl, no permite mutaciones
numbers.filter(() => {})
numbers.reduce(() => 0)
numbers.map(() => 0)
