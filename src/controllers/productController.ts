import { Request, Response } from "express";
import { ProductRepository } from "../repositories/productRepository";

export class ProductController {
  async saveProduct(request: Request, response: Response) {
    const { name, price } = request.body;
    const productRepository = new ProductRepository();

    if (!name || !price) {
      return response.status(400).json({ error: "All fields must be filled" });
    }

    await productRepository.saveProduct(name, price);

    return response.status(201).send();
  }
}
