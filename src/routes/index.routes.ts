import { Router } from "express";

export const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  return response.send("Hello word");
});
