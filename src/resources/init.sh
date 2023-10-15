#!/bin/bash

# Espera a que los 3 contenedores estén iniciados correctamente
until mongo admin --host sensor-logs:27017 --eval 'rs.status().ok' 1>/dev/null 2>/dev/null; do
  sleep 1
done

# Se inicializa el replica set
rs.initiate(
  {
    _id: "rs0",
    members: [
      {
        _id: 0,
        host: "sensor-logs:27017",
      },
      {
        _id: 1,
        host: "sensor-logs-replica:27017",
      },
      {
        _id: 2,
        host: "sensor-logs-replica-arbitraria:27017",
      }
    ]
  }
)