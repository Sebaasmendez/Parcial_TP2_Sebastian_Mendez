import fs from 'fs'

class ModelNota {    

    constructor(){
        this.nombreArchivo = './model/DAOs/notas.json'
    }

    getNewId = notas => {
        return (notas[notas.length - 1]?.id || 0) + 1
    }

    async readFile(){
        return await fs.promises.readFile(this.nombreArchivo, 'utf-8')
    }

    async writeFile(notas){
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(notas, null, '\t'))
    }

    obtenerNotas = async () => {
        try{
            let notas = []
            try{
                notas = JSON.parse(await this.readFile())
            }catch{}

            return notas
        }catch(error){
            console.log('Error en ModelNota.obtenerNotas() --> ', error)
            return []
        }
    }

    guardarNota = async nota => {
        try{

            //Inicializa vacio el array
            let notas = []
            try{
                notas = JSON.parse(await this.readFile())
            }catch{}

            let id = this.getNewId(notas)
            const notaGuardada = { id, ...nota }
            notas.push(notaGuardada)
            await this.writeFile(notas)
            return notaGuardada

        }catch(error){
            console.log('Error en ModelNota.guardarNota() --> ', error)
            return {}
        }
    }

}

export default ModelNota