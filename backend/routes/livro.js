const router = require("express").Router()
const produtoController = require("../controllers/livroController");

router.route("/livros").post((req, res)=>produtoController.create(req,res));
router.route("/livros/all").get((req, res)=> produtoController.readAll(req,res));
router.route("/livros/:id").get((req, res)=> produtoController.readOne(req,res));
router.route("/livros/edit/:id").put((req, res)=> produtoController.update(req,res));
router.route("/livros/delete/:id").post((req, res)=> produtoController.delete(req,res));

module.exports = router;