const main = require("../database/conn");
const {Produto: ProdutoModel, Produto } = require("../models/Produto");

const produtoController = {
    create: async(req, res)=>{
        try {
            const produto = {
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade,
            };
            const response = await ProdutoModel.create(produto);
            res.status(201).json({response, msg:"Usuário cadastrado!"});
        } catch (error) {
            console.log(error);
        }
    },

   readAll: async(req, res)=>{
        let results = await ProdutoModel.find({});
        res.send(results).status(200);
    },
    delete: async(req, res)=>{
       try {
            const id = req.params.id;
            let results = await ProdutoModel.deleteOne({_id: id});   
            res.send(results).status(200); 
        } catch (error) {
            console.log(error);
        }
    },
    
    readOne: async(req, res)=>{
        try {
            const id = req.params.id;
            let results = await ProdutoModel.findOne({_id: id});   
            res.send(results).status(200); 
        } catch (error) {
            console.log(error);
        }
    },
    
    update: async(req, res)=>{
        try {
            const id = req.params.id;
            const produto = {
                nome: req.body.nome,
                preco: req.body.preco,
                quantidade: req.body.quantidade
            };

            let results = await ProdutoModel.updateOne({_id: id},{$set: produto});   

            if (results.modifiedCount === 0) {
                return res.status(404).send({ message: 'Produto não encontrado ou nenhuma alteração foi feita' });
            };
            res.status(200).send({ message: 'Produto atualizado com sucesso' });

        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Erro ao atualizar o produto' });
        }
    },
                    
};
module.exports = produtoController;
                
                
                