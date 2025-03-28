import express from "express";
const gameRoutes  = express.Router();
import gameController from "../controllers/gameController.js";

// Endpoint para listar todos os jogos
gameRoutes.get("/games", gameController.getAllGames)
// Endpoint para cadastrar um jogo
gameRoutes.post("/game", gameController.createGame)
// Endpoint para apagar um jogo
gameRoutes.delete("/games/:id", gameController.deleteGame)
// Endpoint alterar dado jogo
gameRoutes.put("/game/:id", gameController.updateGame)
// Endpoint listar registro único
gameRoutes.get("/game/:id", gameController.getOneGame)

export default gameRoutes;