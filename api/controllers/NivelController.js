//const database = require('../models')

const Services = require('../services/Services')
const nivelService = new Services('Niveis')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await nivelService.pegaTodosOsRegistros()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaNivel(req, res) {
      const {id} = req.params
      try {
        const nivel = await nivelService.pegaUmRegistro({id})
        return res.status(200).json(nivel)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async criaNivel(req, res) {
      const novoNivel = req.body
      try {
        const nivelCriado = await nivelService.criaRegistro(novoNivel)
        return res.status(200).json(nivelCriado)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async atualizaNivel(req, res) {
      const {id} = req.params
      const novasInfos = req.body
      try {
        await nivelService.atualizaRegistro(novasInfos,id)
        return res.status(200).json({ mensagem: `id ${id} atualizado` })
        
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async apagaNivel(req, res) {
      const {id} = req.params
      try {
        await nivelService.apagaRegistro(id)
        return res.status(200).json({message: `o nivel com id ${id} foi deletado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    } 

    static async restauraNivel (req, res) {
      const {id} = req.params
      try {
        await nivelService.restauraRegistro(id)
        return res.status(200).json({message: `o nivel com id ${id} foi restaurado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    } 
    
}
module.exports = NivelController