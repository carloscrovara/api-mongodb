const cursosCtrl = {};

cursosCtrl.index = (req, res) => {

res.json("hola llegué al controller");
}

cursosCtrl.test = (req, res) =>{
    res.json("hola soy otra ruta");
}

module.exports = cursosCtrl;