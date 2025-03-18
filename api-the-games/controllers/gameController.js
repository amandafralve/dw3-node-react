import Game from "../models/Games.js";
import gameService from "../services/gameServices.js";
import { ObjectId, ObjectIds } from "mongodb";

const getAllGames = async (req, res) => {
    try{
        const games = await gameService.getAll();
        res.status(200).json({games:games})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor"})
    }
}

// Cadastrando um jogo
const createGame = async (req,res) => {
    try{
        const {title, plataform, year, price} = req.body
        await gameService.Create(title, plataform, year, price)
        res.sendStatus(201) // Código CREATED

    }catch(error){
        console.log(error)
        res.status(500).json({ error:"Erro interno no servidor."})
    }
}

// Apagando um jogo
const deleteGame = async (req,res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            gameService.Delete(id)
            res.sendStatus(204)
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro interno no servidor. "})
    }
}

// Alterando um jogo
const updateGame = async(req, res) => {
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id;
            const {title, plataform, year, price} = req.body
            const game = gameService.Update(title, plataform, year, price)
            res.status(200).json({ game })
        }else{
            res.sendStatus(400); // Bad Request 400
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500) // Erro interno no servidor
    }
}

// Listar um jogo
const getOneGame = async(req,res)=>{
    try{
        if(ObjectId.isValid(req,params.id)){
            const id = req.params.id
            const game = await gameService.getOne(id);
            if(!game){
                res.sendStatus(404) // jogo não encontrado
            }else{
                res.send(200).json({ game})
            }
        }else{
            res.sendStatus(400) // Bad Request
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

export default { getAllGames, createGame, deleteGame, getOneGame }