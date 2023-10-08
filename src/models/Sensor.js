const mongoose = require('mongoose')

// Este schema define como debe ingresarse la información en la mongodb, es decir, define la estructura como si fuera una tabla de una base de datos relacional.

const Schema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    value: { type: Number, required: true },
    area: { type: String, required: true },
    boardId: { type: String, required: true },
    timestamp: { type: Date, required: true }
  }
)

module.exports = mongoose.model('Sensor', Schema)