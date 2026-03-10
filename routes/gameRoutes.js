import express from 'express';
import {
  readGames,
  addGame,
  editGame,
  removeGame
} from '../controllers/gameController.js';

const router = express.Router();

router.get('/', readGames);
router.post('/', addGame);
router.put('/:id', editGame);
router.delete('/:id', removeGame);

export default router;