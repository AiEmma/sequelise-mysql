const { Router} = require('express')
const PessoaController = require('../controllers/Pessoa.controller')

const router = Router()

router.get('/pessoas/ativo', PessoaController.pegaTodasPessoas)
router.get('/pessoas', PessoaController.pegaTodasPessoasAtivas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa )
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas', PessoaController.criaPessoa)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
router.post('/pessoas/:estudanteId/matricula/', PessoaController.criaMatricula)
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:id', PessoaController.deletaPessoas)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula)

module.exports= router