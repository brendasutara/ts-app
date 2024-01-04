// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

//agregando el tipado
export function parseStr(input:string): string[];
export function parseStr(input:string[]): string;
export function parseStr(input:number): boolean;

// export function parseStr(input: string | string []): string | string[] {
//   if (Array.isArray(input)) {
//     // digo que si el input es un array que una todos los elementos
//     return input.join (''); //retorno un string
//   } else {
//     //si no me dieron un array, entonces tengo un string
//     return input.split(''); //retorno un string []
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    // digo que si el input es un array que una todos los elementos
    return input.join (''); //retorno un string
  } else if (typeof input === 'string') {
    //si no me dieron un array, entonces tengo un string
    return input.split(''); //retorno un string []
  } else if (typeof input === 'number') {
    //si no me dieron un array, entonces tengo un string
    return true; // booleano
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
rtaStr.toLocaleLowerCase();
console.log('rtaStr',"['N','i','c','o'] =>", rtaStr);

/* En conclusión, lo que vamos a hacer es escribir de nuevo la función
con los parámetros y su tipo de dato de retorno antes de declarar
la función como tal, para que de esa forma TS sepa en que casos se
retorna cierto valor. */
