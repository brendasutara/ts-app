// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

function parseStr(input: string | string []): string | string[] {
  if (Array.isArray(input)) {
    // digo que si el input es un array que una todos los elementos
    return input.join (''); //retorno un string
  } else {
    //si no me dieron un array, entonces tengo un string
    return input.split(''); //retorno un string []
  }
}

const rtaArray = parseStr('Nico');
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
console.log('rtaStr',"['N','i','c','o'] =>", rtaStr);
