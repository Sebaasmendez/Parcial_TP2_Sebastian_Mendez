import express from 'express'
import ControllerNota from '../controller/notas.js'

class RouterNota {

    constructor(){
        this.router = express.Router()
        this.controller = new ControllerNota()
    }

    start(){
        this.router.post('/ingreso', this.controller.guardarNota)

        this.router.get('/listado', this.controller.obtenerListadoNotas)
        this.router.get('/promedio', this.controller.obtenerPromedioNotas)
        this.router.get('/minmax', this.controller.obtenerMinMaxNota)
        this.router.get('/cantidad', this.controller.obtenerCantidadNotas)

        return this.router
    }

}

export default RouterNota