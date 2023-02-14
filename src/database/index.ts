import { connection } from "./database";

connection
  .authenticate()
  .then(() => {
    console.log("conexão feita");
  })
  .catch((msgerro) => {
    console.log("erro");
  });
