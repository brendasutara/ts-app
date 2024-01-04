export const createProduct = (
  id: string  | number,
  isNew: boolean,
  //parámetros opcionales al final
  stock?: number,
) => {
  return {
    id,
    isNew,
    // significa si no viene ningun valor en stock, que sea por defecto 10
    stock: stock ?? 10,
  }
}
// Cuidado con el operador || porque considera falso esto, entonces se reemplazó por ??
// 0 === false
//'' === false
//false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

//si no le mandamos el item opcional, nos sale undefined
const p2 = createProduct(1, true);
console.log(p2);
