import mongoose, { mongo } from "mongoose";
// usuário e senha do banco de dados
const dbUser = "amandafralve"
const dbPassword = "GQV5RqBHI1of70Pw"
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@bancoteste.ldswlpq.mongodb.net/api-the-games?retryWrites=true&w=majority&appName=BancoTeste`
    )
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar-se com o mongoDB.")
    });
    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!")
    })
};
connect();
export default mongoose;