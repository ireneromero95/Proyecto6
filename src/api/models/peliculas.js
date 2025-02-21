const mongoose = require('mongoose');

const peliSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    director: { type: String, required: true },
    categoria: {
      type: String,
      required: true,
      enum: [
        'Romance',
        'Terror',
        'Ciencia Ficción',
        'Acción',
        'Comedia',
        'Drama'
      ]
    },
    valoracion: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'peliculas'
  }
);

const Pelicula = mongoose.model('peliculas', peliSchema, 'peliculas');

module.exports = Pelicula;
