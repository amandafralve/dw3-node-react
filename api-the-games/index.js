import express from 'express'
const app = express()

// Configuração do express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Iniciando Servidor
const port = 4000
app.listen(port, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})
