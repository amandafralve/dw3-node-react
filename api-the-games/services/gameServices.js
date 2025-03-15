import Game from "../models/Games.js";

class gameService{
    async getAll(){ // Seleciona todos os registros
        try{
            const games = await Game.find();
            return games;
        }catch(error){
            console.log(error)
        }
    }
}

export default new gameService();