import "reflect-metadata";
import startup from "./startup.js";

const port = "5000";

startup.app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
