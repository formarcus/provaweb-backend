import route from "./router";
import express from "express";
import cors from "cors";
import { Create, Find } from "./controllers/ProdutoController";

const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

// Adicionar um produto.
const create = new Create();
route.post("/create", create.handler);

// Buscar um produto.
const find = new Find();
route.get("/find", find.handler);

// Buscar um produto.
const del = new Find();
route.delete("/delete", del.handler);

app.listen(4003, () => console.log("tudo certo, 4003"))