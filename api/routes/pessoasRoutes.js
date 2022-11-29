const { Router} = require('express')
const PessoaController = require('../controllers/Pessoa.controller')
const MatriculasController = require ('../controllers/MatriculasController')

const router = Router()

router.get('/pessoas/ativo', PessoaController.pegaTodasPessoas)
router.get('/pessoas', PessoaController.pegaTodasPessoasAtivas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa )
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula)
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculasController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', MatriculasController.pegaTurmasLotadas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.pegaumaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/matricula/', MatriculasController.criaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculasController.restauraMatricula)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.atualizaMatricula)
router.delete('/pessoas/:id', PessoaController.deletaPessoas)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculasController.apagaMatricula)

module.exports= router