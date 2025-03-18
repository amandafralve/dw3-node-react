import Game from "../models/Games.js";

class gameService {
  async getAll() {
    // Seleciona todos os registros
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Cadastro de novo jogo
  async Create(title, plataform, year, price) {
    try {
      const newGame = new Game({
        title,
        plataform,
        year,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Apagando jogo
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id ${id} foi apagado.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Alterando um jogo
  async Update(title, plataform, year, price) {
    try {
      const updatedGame = await Game.findByIdAndUpdate(
        id,
        {
          title,
          plataform,
          year,
          price,
        },
        { new: true }
      );
      console.log(`Dados do jogo ${id} ${title} alterados com sucesso`);
      return updatedGame;
    } catch (error) {
      console.log(error);
    }
  }
//listar um registro
  async getOne(id){
    try{
        const game = await Game.findOneAndDelete({_id:id})
        return game;
    }catch(error){
        console.log(error)
    }
  }

}

export default new gameService();
