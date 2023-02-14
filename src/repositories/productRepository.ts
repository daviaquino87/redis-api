import { product } from "../models/Products";

export class ProductRepository {
  async saveProduct(name: string, price: number) {
    await product.create({
      name: name,
      price: price,
    });
  }
}
