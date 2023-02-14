import { Router } from "express";
import { productRouter } from "./products.routes";

export const indexRouter = Router();
indexRouter.use("/products", productRouter);

indexRouter.get("/", (request, response) => {
  return response.send("Hello word");
});
