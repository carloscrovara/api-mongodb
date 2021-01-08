const express = require('express');
const router = express.Router();

const{ altaCurso, updateCurso, traerCursos, deleteCurso, traerCurso} = require("../controllers/cursosController");
 
router.post("/curso/nuevo", altaCurso);
router.put("/curso/update/:id", updateCurso);
router.get("/curso", traerCursos);
router.delete("/curso/borrar/:id", deleteCurso);
router.get("/curso/:id", traerCurso);
 
module.exports = router;