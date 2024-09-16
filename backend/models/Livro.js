const mongoose = require("mongoose");
const{Schema} = mongoose;

const livroSchema = new Schema({
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

const Livro = mongoose.model("Livro", livroSchema);
module.exports = {
    Livro,
    livroSchema,
};