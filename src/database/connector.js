const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
  const workmode = process.env.WORKMODE
  const uri = workmode !== 'production' ? process.env.MONGODB_URI_DEVELOPMENT : process.env.MONGODB_URI_PRODUCTION

  try {
    await mongoose.connect(uri)
    console.log('Database connected successfully')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = connect