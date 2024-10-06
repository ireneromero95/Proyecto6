const Pelicula = require("../../api/models/peliculas");
const movies = require("../../data/movies");
const mongoose = require("mongoose");
require("dotenv").config();

//De nuevo conecto con mongoose, no olvidar el dotenv
mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
		// Busco todas las pelis
    const allPeliculas = await Pelicula.find();
		// Si existen películas previamente, lo vacío con drop
    if (allPeliculas.length) {
      await Pelicula.collection.drop();
      console.log("Éxito borrando datos");
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		//Una vez vaciada rellenamos de nuevo
		await Pelicula.insertMany(movies);
    console.log("Éxito insertándolos");
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());