import livros from "../models/livro.js";

class LivroController {

    //metodo http get retorna todos os livros
    static listarLivros = (req, res) => {
        livros.find((err, livro) => {
            res.status(200).send(livro);
            //console.log(livro);
        });


    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ menssage: err.menssage + ' falha ao cadastrar um livro.' });
            } else {
                res.status(200).send(livro.toJSON());
            }
        })
    }
    //metodo http put atualiza um livro
    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send("Livro foi atualizado com sucesso");
            } else {
                res.status(500).send({ menssage: err.menssage });
            }
        })
    }

    static listarLivroPorId = (req, res) => {
        let id  = req.params.id;
        livros.findById(id, (err, livros) => {
            if (!err) {
                res.status(200).send(livro);
            } else {
                res.status(400).send({ menssage: err.menssage + "ID do livro não localizado" });
            }
        });
    }

    static excluirLivroPorId =(req,res) =>{
    const id = req.params.id; 
    livros.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.status(200).send("O livro foi excluido com sucesso")
        }else{
            res.status(500).send({menssage: err.menssage})
        }
    })
    }


}



export default LivroController;