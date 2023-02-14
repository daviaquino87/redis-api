import { product } from "../models/Products";

export class ProductRepository {
  async saveProduct(name: string, price: number) {
    await product.create({
      name: name,
      price: price,
    });
  }

  async listAllProducts() {
    const allProducts = await product.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });
    return allProducts;
  }
}
