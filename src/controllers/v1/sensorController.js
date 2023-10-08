
// Esta función es la que se encarga de traer toda la información realacionada con los sensores desde la base de datos.
// Se recomienda diseñar un paginador para aligerar la carga de datos durante la transacción.

const getAllData = async (req, res) => {
  res.send('Hola mundo desde express')
}

// Esta función es la que se encarga de traer toda la información realacionada con un sensor en específico desde la base de datos.
const getDataById = async (req, res) => {
  res.send('Hola mundo desde express este es el id: ' + req.params.id)
}

// Esta función es la que se encarga de crear un sensor en la base de datos.
const createData = async (req, res) => {
  res.send('Hola mundo desde express se crea un sensor.')
}

// Esta función es la que se encarga de actualizar un sensor en la base de datos.
const updateData = async (req, res) => {
  res.send('Hola mundo desde express se actualiza un sensor. con ID: ' + req.params.id)
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