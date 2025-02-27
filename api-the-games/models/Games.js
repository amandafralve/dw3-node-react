import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: String,
  plataform: String,
  year: Number,
  price: Number,
});

// Criação da coleção de Games no banco de dados
const Game = mongoose.model("Game", gameSchema);

export default Game;
