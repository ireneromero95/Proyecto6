const Plataforma = require("../models/plataformas")

const getPlataformas = async (req, res, next) => {
  try {
      const plataformas = await Plataforma.find().populate("peliculas"); //Esto es el campo del modelo, no la ref
      return res.status(200).json(plataformas);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getPlataformaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id);
    return res.status(200).json(plataforma);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    //He quitao el texto de aqui
    return res.status(400).json("Error");
  }
}

const updatePlataforma = async (req, res, next) => {
  try {
    const {id} = req.params;
    const oldPlataforma = await Plataforma.findById(id); //Haciendo un get de la plataforma antes de modificarla
    const newPlataforma = new Plataforma(req. body);
    newPlataforma._id = id;
    newPlataforma.peliculas = [...oldPlataforma.peliculas, ...req.body.peliculas] 
    //El nuevo array van a ser todas las peliculas que había antes más las nuevas
    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, {
      new: true,
    });
    return res.status(200).json(plataformaUpdated);

  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}
const deletePlataforma = async (req, res, next) => {
  try {
    const {id} = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    return res.status(200).plataformaDeleted;
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

module.exports = {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  updatePlataforma,
  deletePlataforma,
}