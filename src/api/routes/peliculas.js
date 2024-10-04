const { getPelis, getPeliById, getPeliByCategory, getPeliByValoracion, postPeli, updatePeli, deletePeli } = require("../controllers/peliculas");

const pelisRouter = require("express").Router();

pelisRouter.get("/valoracion/:valoracion", getPeliByValoracion);
pelisRouter.get("/categoria/:categoria", getPeliByCategory);
pelisRouter.get("/:id", getPeliById);
pelisRouter.get("/", getPelis);
pelisRouter.post("/", postPeli);
pelisRouter.put("/:id", updatePeli);
pelisRouter.delete("/:id", deletePeli);

module.exports = pelisRouter