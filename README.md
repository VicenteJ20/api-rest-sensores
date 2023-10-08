# API REST - Estacionamiento Inteligente V1

Este proyecto está desarrollado como parte de un conjunto de APIs, servicios y aplicaciones destinadas a administrar distintas plazas de estacionamientos a través de un panel de control intuitivo desarollado con NextJS 13.

## Requisitos previos

Este proyecto hace uso de variables de entorno, en donde se destacan las siguientes variables:

```
  MONGODB_URI_PRODUCTION=
  MONGODB_URI_DEVELOPMENT=mongodb://user:password@localhost:27017/?authMechanism=DEFAULT
  WORKMODE=development

  WEB_SERVER_PORT=YOURPORT
```
En las variables previas, se puede apreciar MONGODB_URI_PRODUCTION y MONGODB_URI_DEVELOPMENT, la razón de esto es tener ambas URIS disponibles en el proyecto, y cambiando el valor de WORKMODE hacer un switch entre cada base de datos de forma sencilla.

El WEB_SERVER_PORT es el puerto que abrirá express para trabajar.

### Requisitos adicionales

Opcionalmente es posible instalar Docker y aprovechar el archivo docker-compose disponible en la raíz del proyecto, de esta manera al ejecutar el comando *docker-compose up* docker se encargará de crear un contenedor (o grupo de contenedores) requeridos para que el proyecto funcione correctamente.

En el caso de no utilizar docker, es necesario tener un servidor de MongoDB, ya sea un clúster gratuito de MongoDB Atlas o un servidor propio, solo hay que tener en cuenta las URIS en las variables de entorno.

## Tecnologías utilizadas

1. NodeJS (entorno de ejecución de JS)
2. JavaScript (ES6)
3. Express (Webserver)
4. Mongoose (ODM)
5. Docker (contenedores)
6. Dotenv (gestionar variables de entorno)

