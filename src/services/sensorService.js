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

module.exports = {
  getAllDataService,
  createSensorService
}