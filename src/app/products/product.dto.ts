import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

//DTOS: Data Transfer Object
// Con omit podemos omitir las propiedades, campos o llaves que quieramos.
