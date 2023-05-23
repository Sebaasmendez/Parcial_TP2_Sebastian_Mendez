import express from 'express'
import config from './config.js'
import RouterNota from './router/notas.js'
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/notas', new RouterNota().start())

// Configuracion servidor
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
server.on('Error', error => console.log(`Error en servidor: ${error.message}`))