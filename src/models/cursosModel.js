const {Schema, model} = require("mongoose");

const CursosSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        duracion: {
            type: String,
        },
        precio: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("cursos", CursosSchema, "Cursos");