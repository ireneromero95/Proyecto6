# Readme Proyecto 6

No sé muy bien qué poner aquí.

## Features

- Crear, leer, editar y borrar plataformas.
- Crear, leer, editar y borrar películas.

Para ello:

En películas todo el CRUD se ejecuta en http://localhost:3000/api/v1/peliculas salvo:


- getPeliByID: http://localhost:3000/api/v1/peliculas/:id
- getPeliByCategory: http://localhost:3000/api/v1/peliculas/categoria/:categoria
- getPeliByValoracion: http://localhost:3000/api/v1/peliculas/valoracion/:valoracion

En el caso de las plataformas suced igual, todo el CRUD se ejecuta en http://localhost:3000/api/v1/plataformas salvo:

- getPlataformaByID: http://localhost:3000/api/v1/plataformas/:id

## Tech

El proyecto utiliza diferentes bibliotecas:

- [dotenv] - para leer la información del .env
- [nodemon] - para mantener el código ejecutando
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [mongoose] - para el servidor
- [cors] 


## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run. ¿Supongo?

Install the dependencies and devDependencies and start the server.

Para ejecutar el código escribir:

npm run dev ó npm run start

Para reiniciar la información ejecutar npm run seed
