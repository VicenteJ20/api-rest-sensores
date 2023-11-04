const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {

  const uri = 'mongodb+srv://vicente:estacionamiento2023@clustersensores.qheoplv.mongodb.net/?retryWrites=true&w=majority'

  try {
    await mongoose.connect(uri)
    console.log('Database connected successfully')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = connect