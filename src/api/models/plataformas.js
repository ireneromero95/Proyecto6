const mongoose = require("mongoose");

const plataformaSchema = new mongoose.Schema({
  nombre: {type: String, required: true},
  imagen: {type: String, required: true},
  peliculas:[{type: mongoose.Types.ObjectId, ref:"peliculas", required:false}] 
}, {
  timestamps:true,
  collection: "plataformas"
})

const Plataforma = mongoose.model("plataformas", plataformaSchema, "plataformas")

module.exports = Plataforma;