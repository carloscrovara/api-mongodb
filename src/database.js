const mongoose = require('mongoose'); 

//Conexión a DB
mongoose
.connect('mongodb://localhost:27017/cursosapi',
 {useNewUrlParser: true, useUnifiedTopology: true})
 .then( db => console.log("Base de datos conectada"))
 .catch(err => console.error(err));