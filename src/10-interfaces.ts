type Sizes = 'S' | 'M' | 'L' | 'XL';
// con la instrucciòn type yo puedo definir tipos primtivos o directos
type userId = string | number;

//queda casi igual que el tipado. Las interfaces funcionan
// muy similar a como lo hace type, pero en las interfaces
// solo aplica para los objetos
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
