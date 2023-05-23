import ServiceNota from '../service/notas.js'

class ControllerNota {    

    constructor(){
        this.service = new ServiceNota()
    }

    guardarNota = async (req, res) => {
        try{
            const nota = req.body
            const notaGuardada = await this.service.guardarNota(nota)
            res.json(notaGuardada)
        }catch(error){
            console.log('Error en ControllerNota.guardarNota() --> ', error)
        }
    }

    obtenerListadoNotas = async (req, res) => {
        try{
            const listado = await this.service.obtenerListadoNotas()
            res.json(listado)
        }catch(error){
            console.log('Error en ControllerNota.obtenerListadoNotas() --> ', error)
        }
    }

    obtenerPromedioNotas = async (req, res) => {
        try{
            const promedio = await this.service.obtenerPromedioNotas()
            res.json(promedio)
        }catch(error){
            console.log('Error en ControllerNota.obtenerPromedioNotas() --> ', error)
        }
    }

    obtenerMinMaxNota = async (req, res) => {
        try{
            const notas = await this.service.obtenerMinMaxNota()
            res.json(notas)
        }catch(error){
            console.log('Error en ControllerNota.obtenerMinMaxNota() --> ', error)
        }
    }

    obtenerCantidadNotas = async (req, res) => {
        try{
            const cantidad = await this.service.obtenerCantidadNotas()
            res.json(cantidad)
        }catch(error){
            console.log('Error en ControllerNota.obtenerCantidadNotas() --> ', error)
        }
    }

}

export default ControllerNota