const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.get('/teste', (req, res) => res
  .status(200)
  .send({ mensagem: 'boas-vindas à API'}))

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))

module.exports = app