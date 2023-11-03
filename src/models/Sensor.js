const mongoose = require('mongoose')

// Este schema define como debe ingresarse la información en la mongodb, es decir, define la estructura como si fuera una tabla de una base de datos relacional.

const Schema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    Status: { type: String, required: true }
  }
)

module.exports = mongoose.model('Sensor', Schema)