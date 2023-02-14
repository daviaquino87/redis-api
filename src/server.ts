import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";

import { indexRouter } from "./routes/index.routes";

import "./database";

const app = express();
app.use(express.json());
app.use(indexRouter);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error) {
      return response.json({ error: "internal error server." });
    }
  }
);

app.listen(process.env.PORT || 3000, () => {
  console.log("Application running.");
});
