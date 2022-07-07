import express from "express";
import db from "./config/dbConnection.js";
import livros from "./models/Livro.js"


db.on("error", console.log.bind(console,"Erro de conexão"));
db.once("open",()=>{
    console.log('conexão com banco feira com sucesso');
});


const app = express();
app.use(express.json()); 


/* const livros = [
    { id: 1, "titulo": "livro 1" },
    { id: 2, "titulo": "livro 2" }
]; */



//metodo http get que retorna apenas uma string na url
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})


//metodo http get retorna todos os livros
app.get('/livros', (req, res) => {
    livros.find((err,livro)=>{
    res.status(200).json(livros);
    });
    
})


//metodos http get retorna apenas 1 livro
app.get('/livros/:id',(req,res)=>{
    
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
    });


//metodo http post cadastra um livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso');
})



//metodo http put atualiza um livro
app.put('/livros/:id',(req,res)=>{
console.log("sdsds")
let index = buscaLivro(req.params.id);
livros[index].titulo = req.body.titulo;
res.json(livros);
});

app.delete('/livros/delete/:id',(req,res) => {
let index = buscaLivro(req.params.id);
livros.splice(index,1);
res.json(livros);
});


function buscaLivro (id) {
    return livros.findIndex( livro => livro.id == id); //retorna primeiro valor o objeto for igual ao id
}
function deletaLivro (id) {
    return livros.findIndex( livro => livro.id == id); //retorna primeiro valor o objeto for igual ao id
}

export default app;