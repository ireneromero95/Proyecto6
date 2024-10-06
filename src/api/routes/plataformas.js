const { getPlataformas, getPlataformaById, postPlataforma, updatePlataforma, deletePlataforma } = require("../controllers/plataformas");

const plataformasRouter = require("express").Router();

plataformasRouter.get("/:id", getPlataformaById);
plataformasRouter.get("/", getPlataformas);
plataformasRouter.post("/", postPlataforma);
plataformasRouter.put("/:id", updatePlataforma);
plataformasRouter.delete("/:id", deletePlataforma);

module.exports = plataformasRouter;