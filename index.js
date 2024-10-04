require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const pelisRouter = require("./src/api/routes/peliculas");
const app = express();
//Importante para poder recibir json en el servidor
app.use(express.json());
connectDB;

app.use("/api/v1/peliculas", pelisRouter)

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
})

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
})