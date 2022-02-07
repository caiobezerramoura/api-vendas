import { getCustomRepository } from 'typeorm';
import Product from '../Product';
import { ProductRepository } from '../repositories/ProductsRepositories';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find();

    return products;
  }
}

export default ListProductService;
