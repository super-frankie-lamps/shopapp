import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  create(createProductDto: CreateProductDto): Product {
    const product = { id: Date.now(), ...createProductDto };
    this.products.push(product);
    return product;
  }
}

