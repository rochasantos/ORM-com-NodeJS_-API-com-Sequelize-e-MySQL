const router = require('express').Router()
const TurmaController = require('../controllers/TurmaController.js')

router
  .get('/turmas', TurmaController.pegaTodasAsTurmas)
  .get('/turmas/:id', TurmaController.pegaUmaTurma)
  .post('/turmas', TurmaController.atualizaTurma)
  .put('/turmas/:id', TurmaController.atualizaTurma)
  .delete('/turmas/:id', TurmaController.apagaTurma)

module.exports = router