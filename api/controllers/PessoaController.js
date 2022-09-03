const database = require('../models')

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params
    try {
      const pessoa = await database.Pessoas.findOne({ where: { id: Number(id) }})
      res.status(200).json(pessoa)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
      res.status(201).json(novaPessoaCriada)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const novasInfos = req.body
    const { id } = req.params
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) }})
      const pessoaAtualizada = await database.Pessoas.findOne({where:{id:Number(id)}})
      return res.status(200).json(pessoaAtualizada)
    } catch(error) {
      return res.status(500).json(error.message)
    }
  }

  static async excluiPessoa(req, res) {
    const {id} = req.params
    try {
      await database.Pessoas.destroy({where: {id: Number(id)}})
      return res.status(200).send("Pessoa excluida com sucesso.")   
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  // /pessoas/:estudateId/matricula/:matriculaId
  static async pegaUmaMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params
    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(matricula)
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }
  // /pessoas/:estudateId/matricula
  static async criaMatricula(req, res) {
    const {estudanteId} = req.params
    const dadosDaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
    try {
      const matriculaCriada = await database.Matriculas.create(dadosDaMatricula)
      return res.status(200).json(matriculaCriada)      
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }

  // /pessoas/:estudanteId/matricula/matriculaId
  static async atualizaMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params
    const dadosDaMatricula = req.body
    try {
      await database.Matriculas.update(dadosDaMatricula, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      res.status(200).json(matriculaAtualizada)
    } catch (error) {
      res.status(500).json({mensagem: error.message})
    }
  }
  // /pessoas/:estudanteId/matricula/:matriculaId
  static async deletaMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params
    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).send("Matricula deletada com sucesso!")
    } catch (error) {
      return res.status(500).json({mensagem: error.message})
    }
  }
}

module.exports = PessoaController