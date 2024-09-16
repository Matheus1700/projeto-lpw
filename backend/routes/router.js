const router = require("express").Router()
const usersService = require("./users");
const livrosService = require("./livro");

router.use("/",usersService);
router.use("/",livrosService);

module.exports = router;