const cursosCtrl = {};

cursosCtrl.index = (req, res) => {
res.json("hola llegué al controller");
}

cursosCtrl.test = (req, res) =>{
    res.json("hola soy otra ruta");
}

cursosCtrl.formulario = (req, res) =>{
    let hola = req.body;
    res.json(hola)
}

module.exports = cursosCtrl;