const { getAllDataService, createSensorService, updateSensorService, getAllDataById } = require('../../services/sensorService')

// Esta función es la que se encarga de traer toda la información realacionada con los sensores desde la base de datos.
// Se recomienda diseñar un paginador para aligerar la carga de datos durante la transacción.

const getAllData = async (req, res) => {
  try {
    const sensors = await getAllDataService()
    res.send(sensors)
  } catch (err) {
    console.log('Error message: ' + err.message)
    res.status(500).send('Error message: ' + err.message)
  }
}

// Esta función es la que se encarga de traer toda la información realacionada con un sensor en específico desde la base de datos.
const getDataById = async (req, res) => {
  try {
    const id = req.params.id
    const sensor = await getAllDataById(id)
    
    // retorna un objeto con mensaje básico y mensaje descriptivo en caso de que el id que se está buscando no sea encontrado
    if (!sensor) return res.status(404).send({ message: 'Sensor not found', descriptiveMessage: `No se ha encontrado ningún sensor que coincida con el identificador: ${id}` })

    // en caso de que la condicional previa no se cumpla y si exista una coincidencia, se envía la información al cliente
    res.status(200).send(sensor)
  } catch (err) {
    console.log('Error message: ' + err.message)
    res.status(500).send('Error message: ' + err.message)
  }
}

// Esta función es la que se encarga de crear un sensor en la base de datos.
const createData = async (req, res) => {
  try {
    const data = req.body
    const response = await createSensorService(data)
    res.status(response.status).send(response)
  } catch (err) {
    console.log('Error message: ' + err.message)
    res.status(500).send('Error message: ' + err.message)
  }
}

// Esta función es la que se encarga de actualizar un sensor en la base de datos.
const updateData = async (req, res) => {
  try {
    const response = await updateSensorService(req.body)
    res.status(response.status).send(response.message)
  } catch (err) {
    console.log('Error message: ' + err.message)
    res.status(500).send('Error message: ' + err.message)
  }
}

// Esta función es la que se encarga de eliminar un sensor en la base de datos.
const deleteData = async (req, res) => {
  res.send('Hola mundo desde express se elimina un sensor. con ID: ' + req.params.id)
}

module.exports = {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData
}