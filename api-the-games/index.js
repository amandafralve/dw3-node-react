import express from "express";
const app = express();
import mongoose from "mongoose";
import Game from "./models/Games.js";
import gameRoutes from "./routes/gameRoutes.js";

// Conexão com banco de dados
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games");

// Configuração do express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", gameRoutes)

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  // res.send("API iniciada com sucesso!");
  const games = [
    {
      title: "Game 1",
      year: 2020,
      platform: "PC",
      price: 20,
    },
    {
      title: "Game 2",
      year: 2024,
      platform: "Playstation 5",
      price: 200,
    },
  ];
  res.json(games);
});

// Iniciando Servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});
