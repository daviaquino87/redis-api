import { Router } from "express";
import { ProductController } from "../controllers/productController";

export const productRouter = Router();
const productController = new ProductController();

productRouter.post("/", productController.saveProduct);
