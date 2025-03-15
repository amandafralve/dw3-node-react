import gameServices from "../services/gameServices.js";

const getAllGames = async (req, res) => {
    try{
        const games = await gameServices.getAll();
        res.status(200).json({games:games})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

export default { getAllGames }