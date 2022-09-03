const database = require("../models");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const niveis = await database.Niveis.findAll()
      return res.status(200).json(niveis)
    } catch(error) {
      return res.status(500).json({mensagem: { error: message}})
    }
  }

  static async pegaUmNivel(req, res) {
    const {id} = req.params
    try {
      const nivel = await database.Niveis.findOne({where: {id: Number(id)}})
      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async criaNivel(req, res) {
    const dados = req.body
    try {
      const nivelCriado = await database.Niveis.create(dados)
      return res.status(200).json(nivelCriado)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async atualizaNivel(req, res) {
    const {id} = req.params
    const dados = req.body
    try {
      await database.Niveis.update(dados, {where: {id: Number(id)}})
      const nivelAtualizado = await database.Niveis.findOne({where: {id: Number(id)}})
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  static async apagaNivel(req, res) {
    const {id} = req.params
    try {
      await database.Niveis.destroy({where: {id: Number(id)}})
      return res.status(200).send("Nivel apagado com sucesso!")
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }
}

module.exports = NivelController