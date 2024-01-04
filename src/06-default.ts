export const createProduct = (
  //opcionales de typescripts
  id: string  | number,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return {
    id,
    isNew,
    stock,
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
console.log(p2)
