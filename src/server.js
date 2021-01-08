//LLAMADO A MODULOS
const express = require('express');

//CONFIGURACION EXPRESS
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('port', process.env.PORT || 4000);

//LLAMADO A RUTAS
app.use(require('./routes/cursosRoutes'));

module.exports = app;