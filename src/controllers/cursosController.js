const cursosCtrl = {};

const Curso = require("../models/cursosModel");

cursosCtrl.altaCurso = async (req, res) => {
    const { nombre, duracion, precio } = req.body;
    const nuevoCurso = new Curso({ nombre, duracion, precio });
    await nuevoCurso.save();
    res.json(nuevoCurso);
}

cursosCtrl.updateCurso = async(req, res) =>{
    const { nombre, duracion, precio } = req.body;
    await Curso.findByIdAndUpdate(req.params.id, {nombre, duracion, precio});
    res.json("Actualizado correctamente");
}

cursosCtrl.traerCursos = async (req, res)=>{
    let cursos = await Curso.find({});
    res.json({status: 200, data: cursos});
}

cursosCtrl.deleteCurso = async(req, res) =>{
    await Curso.findByIdAndDelete(req.params.id);
    res.json("Borrado correctamente");
}

cursosCtrl.traerCurso = async(req, res) =>{
    let curso = await Curso.find({_id: req.params.id});
    res.json(curso);
}

module.exports = cursosCtrl;