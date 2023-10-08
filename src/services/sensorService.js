const Sensor = require('../models/Sensor')

// Realiza la operación de obtener todos la información de todos los sensores registrados en la base de datos.

const getAllDataService = async () => {
  try {
    const sensors = await Sensor.find()
    return sensors
  } catch (err) {
    console.log('Error message: ' + err.message)
    throw new Error(err)
  }
}

// Realiza la operación de obtener toda la información de un sensor en específico en base a su id.
// La información la extrae desde la colección Sensor, si se requiere tener información legible o específica para el usuario hay que realizar algunas modificaciones a la forma en que se realiza la solicitud.

const getAllDataById = async (id) => {
  try {
    const sensor = await Sensor.findById(id)
    return sensor
  } catch (err) {
    console.log('Error message: ' + err.message)
    throw new Error(err)
  }
}

// Recibe un objeto data y luego lo guarda en la base de datos.

const createSensorService = async (data) => {
  try {
    const sensor = new Sensor(data)
    await sensor.save()
    return {
      status: 201,
      message: 'Sensor registered successfully'
    }
  } catch (err) {
    console.log('Error message: ' + err.message)
    throw new Error(err)
  }
}


// Edita la información de un sensor en específico en base a su id.

const updateSensorService = async (data) => {
  try {
    const { _id } = data
    
    // verifica si existe el sensor con ese id

  } catch (err) {
    console.log('Error message: ' + err.message)
    throw new Error(err)
  }
}

module.exports = {
  getAllDataService,
  getAllDataById,
  createSensorService,
  updateSensorService
}