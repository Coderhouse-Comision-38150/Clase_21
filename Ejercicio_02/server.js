// Importar nuestras dependencias
import express from 'express'
import {faker} from '@faker-js/faker'

// Configuramos el idioma español en nuestra dependencia faker
faker.locale = 'ja'

// Vamos a crear un dataset(conjunto de datos) falso utilizando faker
let id = 1
function getNextId(){
    return id++
}

// Vamos a crear una función que nos traiga elementos de forma aleatoria
function crearCombinacionAlAzar(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}

function generarNPersonas(cant) {
    const personas = []
    for(let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar(getNextId()))
    }
    return personas
}

// Vamos a crear nuestro servidor
const app = express()

const CANT_PERS_DEFAULT = 10

app.get('/api/personas', (req, res) => {
    const cant = Number(req.query.cant) || CANT_PERS_DEFAULT
    res.json(generarNPersonas(cant))
})

// Configuramos nuestro server
const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log('Servidor HTTP mocking escuchando en el puerto: ' + PORT)
})
srv.on('error', error => console.log('Error en el servidor: ' + PORT))