import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

//DTOS: Data Transfer Object
// Con omit podemos omitir las propiedades, campos o llaves que quieramos.

//con partial podemos ser flexibles y es como si les pusiera a todos los campos opcional
//es mala práctica copiar todo el producto y ponerle a todo ? porque es replicar código
export interface UpdateProductDto extends Partial<CreateProductDto> {

}
//aca estamos poniendo todo opcional menos los campos que ya omitimos en CreateProductDto

type example2 = Required<Product>;
