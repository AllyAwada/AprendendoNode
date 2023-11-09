// Módulos interno, core modules e módulos externo
const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, 'templates')


app.get('/usuarios', (requisicao, respostas) => {
    resposta.sendFile(`${caminho}/usuarios.html`)
})

// Rota de envio de informações para o html
app.get('/', (requisição, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})



// Monitonar uma porta do proprio computador
app.listen(3000, () => {
    console.log(" Servidor rodando na porta 3000.")
})

// localhost:3000