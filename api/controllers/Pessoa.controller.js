//const database = require('../models')
//const Sequelize = require('sequelize')

const { PessoasService } = require('../services/index')
const pessoasService = new PessoasService()

class PessoaController {
    static async pegaTodasPessoas(req, res) {

        try {
            const todasPessoas = await pessoasService.pegaTodosOsRegistros()
            return res.status(200).json(todasPessoas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodasPessoasAtivas(req, res) {

        try {
            const todasPessoasAtivas = await pessoasService.pegaRegistrosAtivos()
            return res.status(200).json(todasPessoasAtivas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await pessoasService.pegaUmRegistro({ id })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await pessoasService.criaRegistro(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoas(req, res) {
        const { id } = req.params
        try {
            await pessoasService.apagaUmRegistro(Number(id))
            return res.status(200).json({ message: `o id ${id} foi deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params
        try {
            const registroRestaurado = await pessoasService.restauraRegistro(Number(id))
            return res.status(200).json(registroRestaurado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaMatricula(req, res) {
        const { estudanteId } = req.params

        try {
            const Matriculas = await pessoasService.pegaMatriculasPorEstudante({ id: Number(estudanteId) })
            return res.status(200).json(Matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelaPessoa(req, res) {
        const { estudanteId } = req.params
        try {
            await pessoasService.cancelaPessoasMatriculas(Number(estudanteId))

            return res.status(200).json(
                { message: `matriculas referente ao estudante ${estudanteId} foram canceladas` })

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}
module.exports = PessoaController