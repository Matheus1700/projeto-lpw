const main = require("../database/conn");
const {User: UserModel, User } = require("../models/User");

const userController = {
    create: async(req, res)=>{
        try {
            const user = {
                name: req.body.name,
                //affiliatiion: req.body.affiliatiion
            };
            const response = await UserModel.create(user);
            res.status(201).json({response, msg:"Usuário cadastrado!"});
        } catch (error) {
            console.log(error);
        }
    },

   readAll: async(req, res)=>{
        let results = await UserModel.find({});
        //res.limit(50);
      res.send(results).status(200);
    },
    readOne: async(req, res)=>{
       try {
           const id = req.params.id;
           let results = await UserModel.findOne({_id: id});   
           res.send(results).status(200); 
       } catch (error) {
           console.log(error);
       }
    },
    update: async(req, res)=>{
       try {
           const id = req.params.id;
           const user = {
               name: req.body.name,
           };
           let results = await UserModel.updateOne({_id: id},{$set: user});   
           res.send(results).status(200); 
       } catch (error) {
           console.log(error);
       }
    },
    delete: async(req, res)=>{
       try {
            const id = req.params.id;
            let results = await UserModel.deleteOne({_id: id});   
            res.send(results).status(200); 
        } catch (error) {
            console.log(error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            const result = await UserModel.deleteMany({});
            res.status(200).json({ msg: "Todos os usuários foram deletados!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao deletar todos os usuários" });
        }
    }
};
module.exports = userController;

    

    
    
//};
 


