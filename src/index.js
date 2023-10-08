const express = require('express')
const routes_v1 = require('./v1/routes')
require('dotenv').config()

async function main() {
  const PORT = process.env.WEB_SERVER_PORT // establece el puerto donde arrancará el webserver.
  const app = express() // inicializa el servidor con express.
  // app config
  app.use(express.json()) // (middleware que nos permite hacer un req.body y obtener la información que se envía como post, put o patch).


  // routes
  app.use('/api/v1', routes_v1)
  // listen server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// ejecuta la función main creada arriba.
main()