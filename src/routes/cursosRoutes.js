const express = require('express');
const router = express.Router();

const{ index, test, formulario } = require("../controllers/cursosController");

router.get("/", index);
router.get("/test", test);
router.post("/formulario", formulario);

module.exports = router;