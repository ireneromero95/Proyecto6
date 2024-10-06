const Pelicula = require("../models/peliculas")

const getPelis = async (req, res, next) => {
  try {
      const pelis = await Pelicula.find().populate("plataforma");
      return res.status(200).json(pelis);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const getPeliByValoracion = async (req, res, next) => {
  try {
    const {valoracion} = req.params;
    const pelis = await Pelicula.find({valoracion: {$gte: valoracion}}); //Esto es lt/e y gt/e q son menmay/igual q
    return res.status(200).json(pelis);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const getPeliByCategory = async (req, res, next) => {
  try {
    const {categoria} = req.params;
    const pelis = await Pelicula.find({categoria}); //esto seria categoria: categoria, pero en este caso es lo mismo
    return res.status(200).json(pelis);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getPeliByDirector = async (req, res, next) => {
  try {
    const { director } = req.params;
    const peli = await Pelicula.find({director});
    return res.statuts(200).json(pelis);
    
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getPeliById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const peli = await Pelicula.findById(id);
    return res.status(200).json(peli);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const postPeli = async (req, res, next) => {
  try {
    const newPeli = new Pelicula(req.body);
    const peliSaved = await newPeli.save();
    return res.status(201).json(peliSaved);
  } catch (error) {
    //He quitao el texto de aqui
    return res.status(400).json("Error");
  }
}

const updatePeli = async (req, res, next) => {
  try {
    const {id} = req.params;
    const newPeli = new Pelicula(req. body);
    newPeli._id = id;
    const peliUpdated = await Pelicula.findByIdAndUpdate(id, newPeli, {
      new: true,
    });
    return res.status(200).json(peliUpdated);

  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const deletePeli = async (req, res, next) => {
  try {
    const {id} = req.params;
    const peliDeleted = await Pelicula.findByIdAndDelete(id);
    return res.status(200).peliDeleted;
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

module.exports = {
  getPelis,
  getPeliById,
  getPeliByCategory,
  getPeliByValoracion,
  postPeli,
  updatePeli,
  deletePeli,
  getPeliByDirector,
}