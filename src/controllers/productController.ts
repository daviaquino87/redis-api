import { Request, Response } from "express";
import { ProductRepository } from "../repositories/productRepository";

export class ProductController {
  async saveProduct(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name || !price) {
      return response.status(400).json({ error: "All fields must be filled" });
    }

    const productRepository = new ProductRepository();

    await productRepository.saveProduct(name, price);

    return response.status(201).send();
  }

  async listAllProducts(request: Request, response: Response) {
    const productRepository = new ProductRepository();

    const products = await productRepository.listAllProducts();
    return response.json(products);
  }
}
