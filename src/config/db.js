const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Conectado a BBDD"))
  .catch(() => console.log("Algo ha fallado"));

module.exports = { connectDB }