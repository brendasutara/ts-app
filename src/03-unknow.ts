let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

//no está limitado por nada, no está bueno
let isNew: boolean = anyVar;
//me deja hacer cualquier ejecución, casi que volvemos a javascript
anyVar.doSomething();
anyVar.toUppercase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

//unknow: no me deja hacer una ejecución sin verificar el tipo
/* unknowVar.doSomething(); */

//hay que hacer una verificación de tipo antes de ejecutarlo
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}
/* unknowVar.touppercase(); */

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
