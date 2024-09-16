const main = require("../database/conn");
const {Livro: LivroModel, Livro } = require("../models/Livro");

const livroController = {
    create: async(req, res)=>{
        try {
            const livro = {
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
            };
            const response = await LivroModel.create(livro);
            res.status(201).json({response, msg:"Usuário cadastrado!"});
        } catch (error) {
            console.log(error);
        }
    },

   readAll: async(req, res)=>{
        let results = await LivroModel.find({});
        res.send(results).status(200);
    },
    delete: async(req, res)=>{
       try {
            const id = req.params.id;
            let results = await LivroModel.deleteOne({_id: id});   
            res.send(results).status(200); 
        } catch (error) {
            console.log(error);
        }
    },
    
    readOne: async(req, res)=>{
        try {
            const id = req.params.id;
            let results = await LivroModel.findOne({_id: id});   
            res.send(results).status(200); 
        } catch (error) {
            console.log(error);
        }
    },
    
    update: async(req, res)=>{
        try {
            const id = req.params.id;
            const livro = {
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade
            };

            let results = await LivroModel.updateOne({_id: id},{$set: livro});   

            if (results.modifiedCount === 0) {
                return res.status(404).send({ message: 'Livro não encontrado ou nenhuma alteração foi feita' });
            };
            res.status(200).send({ message: 'Livro atualizado com sucesso' });

        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Erro ao atualizar o Livro' });
        }
    },
                    
};

module.exports = livroController;