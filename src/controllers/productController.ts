import { Request, Response } from "express";
import { ProductRepository } from "../repositories/productRepository";
import { getRedis, setRedis } from "../redisConfig";

export class ProductController {
  async saveProduct(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name || !price) {
      return response.status(400).json({ error: "All fields must be filled" });
    }

    const productRepository = new ProductRepository();

    await productRepository.saveProduct(name, price);
    await setRedis("listAllProducts", "");

    return response.status(201).send();
  }

  async listAllProducts(request: Request, response: Response) {
    const productRepository = new ProductRepository();

    const data = await getRedis("listAllProducts");

    if (data) {
      return response.json(JSON.parse(data));
    }

    const products = await productRepository.listAllProducts();
    await setRedis("listAllProducts", JSON.stringify(products));

    return response.json(products);
  }
}
