import ModelNota from '../model/DAOs/notas.js'

class ServiceNota {    

    constructor(){
        this.model = new ModelNota()
    }

    guardarNota = async nota => {
        try{
            const notaGuardada = await this.model.guardarNota(nota)
            return notaGuardada
        }catch(error){
            console.log('Error en ServiceNota.guardarNota() --> ', error)
        }
    }

    obtenerListadoNotas = async () => {
        try{
            const notas = await this.model.obtenerNotas()
            const listado = notas.map(n => n.nota)
            return { notas: [...listado] }
        }catch(error){
            console.log('Error en ServiceNota.obtenerListadoNotas() --> ', error)
        }
    }

    obtenerPromedioNotas = async () => {
        try{
            const notas = await this.model.obtenerNotas()
            const promedio = (notas.map(n => n.nota).reduce((acum, nota) => acum + nota, 0)) / notas.length
            return { promedio: promedio }
        }catch(error){
            console.log('Error en ServiceNota.obtenerPromedioNotas() --> ', error)
        }
    }

    obtenerMinMaxNota = async () => {
        try{
            const notas = await this.model.obtenerNotas()
            const min = notas.map(n => n.nota).sort((a,b) => a - b)[0]
            const max = notas.map(n => n.nota).sort((a,b) => b - a)[0]
            return { min: min, max: max }
        }catch(error){
            console.log('Error en ServiceNota.obtenerMinMaxNota() --> ', error)
        }
    }

    obtenerCantidadNotas = async () => {
        try{
            const notas = await this.model.obtenerNotas()
            return { cantidad: notas.length }
        }catch(error){
            console.log('Error en ServiceNota.obtenerCantidadNotas() --> ', error)
        }
    }

}

export default ServiceNota