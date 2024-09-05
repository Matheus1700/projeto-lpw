const router = require("express").Router()
const produtoController = require("../controllers/produtoController");

router.route("/produtos").post((req, res)=>produtoController.create(req,res));
router.route("/produtos/all").get((req, res)=> produtoController.readAll(req,res));
router.route("/produtos/:id").get((req, res)=> produtoController.readOne(req,res));
router.route("/produtos/edit/:id").put((req, res)=> produtoController.update(req,res));
router.route("/produtos/delete/:id").post((req, res)=> produtoController.delete(req,res));

module.exports = router;