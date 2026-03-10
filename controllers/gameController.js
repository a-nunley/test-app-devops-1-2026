import {
  getGames,
  createGame,
  updateGame,
  deleteGame
} from '../models/gameModel.js';

export async function readGames(req, res) {
  const games = await getGames();
  res.json(games);
}

export async function addGame(req, res) {
  const result = await createGame(req.body);
  res.json(result);
}

export async function editGame(req, res) {
  const result = await updateGame(req.params.id, req.body);
  res.json(result);
}

export async function removeGame(req, res) {
  const result = await deleteGame(req.params.id);
  res.json(result);
}