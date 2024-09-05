const router = require("express").Router()
const usersService = require("./users");
const produtosService = require("./produtos");

router.use("/",usersService);
router.use("/",produtosService);

module.exports = router;