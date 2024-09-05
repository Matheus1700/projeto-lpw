const mongoose = require("mongoose");
const{Schema} = mongoose;

const produtoSchema = new Schema({
    nome:{
        type: String,
        require: true
    },
    preco:{
        type: Number,
        require: true
    },
    quantidade:{
        type: Number
    }
}, 
);

const Produto = mongoose.model("Produto", produtoSchema);
module.exports = {
    Produto,
    produtoSchema,
};