const database = require('../models')

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const turmas = await database.Turmas.findAll();
      return res.status(200).json(turmas)
    } catch(error) {
      return res.status(500).json({messagem: error.message})
    }
  }

  static async pegaUmaTurma(req, res) {
    const {id} = req.params
    try {
      const turma = await database.Turmas.findOne({where: { id: Number(id)}})
      return res.status(200).json(turma)
    } catch(error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async criaTurma(req, res) {
    const dadosDaTurma = req.body;
    try {
      const turmaCriada = await database.Turmas.create(dadosDaTurma)
      return res.status(200).json(turmaCriada)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async atualizaTurma(req, res) {
    const {id} = req.params
    const dados = req.body
    try {
      await database.Turmas.update(dados, {where: {id: Number(id)}})
      const turmaAtualizada = await database.Turmas.findOne({where: { id: Number(id)}})
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async apagaTurma(req, res) {
    const {id} = req.params
    try {
      await database.Turmas.destroy({where: {id: Number(id)}})
      return res.status(200).send("Turma apagada com sucesso!")
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }
}

module.exports = TurmaController