import autores from "../models/autores.js";

class AutorController {

    //metodo http get retorna todos os Autores
    static listarAutor = (req, res) => {
        autores.find((err, autor) => {
            res.status(200).send(autor);
            //console.log(livro);
        });


    }

    static cadastrarAutor = (req, res) => {
        const  autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({ menssage: err.menssage + ' falha ao cadastrar um autor.' });
            } else {
                res.status(200).send("Autor cadastrado com sucesso");
            }
        })
    }
    //metodo http put atualiza um livro
    static atualizarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send("Autor foi atualizado com sucesso");
            } else {
                res.status(500).send({ menssage: err.menssage });
            }
        })
    }

    static listarAutorPorId = (req, res) => {
        let id  = req.params.id;
        autores.findById(id, (err, autor) => {
            if (!err) {
                res.status(200).send(autor);
            } else {
                res.status(400).send({ menssage: err.menssage + "ID do autor não localizado" });
            }
        });
    }

    static excluirAutorPorId =(req,res) =>{
    const id = req.params.id; 
    autores.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.status(200).send("O autor foi excluido com sucesso")
        }else{
            res.status(500).send({menssage: err.menssage})
        }
    })
    }


}



export default AutorController;