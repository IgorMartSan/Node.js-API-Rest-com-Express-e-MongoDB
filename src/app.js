import express from "express";
import db from "./config/dbConnection.js";
import livros from "./models/livro.js"
import routes from "./routes/index.js"


db.on("error", console.log.bind(console,"Erro de conexão"));
db.once("open",()=>{
    console.log('conexão com banco feira com sucesso');
});


const app = express();

app.use(express.json()); 

routes(app);//rotas


export default app;