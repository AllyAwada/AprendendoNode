// Módulos interno, core modules e módulos externo
const express = require("express")

const app = express()

// Rota de envio de informações para o html
app.get('/', (requisição, resposta) => {
    resposta.send("Seja bem-vindo(a) ao meu servidor")

})


// Monitonar uma porta do proprio computador
app.listen(3000, () => {
    console.log(" Servidor rodando na porta 3000.")
})

// localhost:3000