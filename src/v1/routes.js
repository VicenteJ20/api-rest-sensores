const express = require('express')
const router = express.Router()

// importamos los controladores
const { getAllData, getDataById, createData, updateData, deleteData } = require('../controllers/v1/sensorController')

// gestionamos las rutas en función de la URL a la que el cliente puede acceder y su método. Seguidamente le indicamos el controller que debe utilizar.

router
  .get('/', getAllData)
  .get('/:id', getDataById)
  .post('/', createData)
  .put('/:id', updateData)
  .delete('/:id', deleteData)

module.exports = router