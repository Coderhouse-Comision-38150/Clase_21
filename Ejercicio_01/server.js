// Importar nuestras dependencias
import express from 'express'

// Vamos a crear nuestros arrays para el mock
const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

// Vamos a crear una función que nos traiga elementos de forma aleatoria
function getRandomElem(arr) {
    return arr[ Math.floor(arr.length * Math.random())]
}

function crearCombinacionAlAzar() {
    return {
        nombre: getRandomElem(nombres),
        apellido: getRandomElem(apellidos),
        color: getRandomElem(colores)
    }
}

function generarNPersonas(cant) {
    const personas = []
    for(let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar())
    }
    return personas
}

// Vamos a crear nuestro servidor
const app = express()

const CANT_PERS_DEFAULT = 100

app.get('/api/test', (req, res) => {
    res.json(generarNPersonas(CANT_PERS_DEFAULT))
})

// Configuramos nuestro server
const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log('Servidor HTTP mocking escuchando en el puerto: ' + PORT)
})
srv.on('error', error => console.log('Error en el servidor: ' + PORT))