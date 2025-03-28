import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String

})

const gameSchema = new mongoose.Schema({
  title: String,
  plataform: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema]
});

// Criação da coleção de Games no banco de dados
const Game = mongoose.model("Game", gameSchema);

export default Game;
