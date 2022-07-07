import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();


router
.get("/livros", LivroController.listarLivros)//listar Todos
.post("/livros",LivroController.cadastrarLivro)//cadastrar
.put("/livros/:id",LivroController.atualizarLivro)//atualizar
.get("/livros/:id",LivroController.listarLivroPorId)//listar por ID
.delete("/livros/:id",LivroController.excluirLivroPorId)//deletar por ID



export default router;