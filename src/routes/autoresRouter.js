import  express  from 'express';
import AutorController from '../controllers/autorController.js';

const router = express.Router();


router
.get("/autor", AutorController.listarAutor)//listar Todos
.post("/autor",AutorController.cadastrarAutor)//cadastrar
.put("/autor/:id",AutorController.atualizarAutor)//atualizar
.get("/autor/:id",AutorController.listarAutorPorId)//listar por ID
.delete("/autor/:id",AutorController.excluirAutorPorId)//deletar por ID



export default router;