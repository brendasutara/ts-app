import { addProduct, products } from "./products/product.services";
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    color: faker.color.human(), // Corregido el método para obtener un color
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']), // Corregido el método para obtener un elemento aleatorio de un array
    price: parseFloat(faker.commerce.price()), // Corregido el método para obtener un precio y parsearlo a float
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()], // Ejemplo de tres palabras aleatorias como tags
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log(products);
