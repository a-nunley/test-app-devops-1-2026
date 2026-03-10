import { ObjectId } from 'mongodb';
import { getDb } from './db.js';

export async function getGames() {
  return getDb().collection('games').find().toArray();
}

export async function createGame(game) {
  return getDb().collection('games').insertOne(game);
}

export async function updateGame(id, game) {
  return getDb().collection('games').updateOne(
    { _id: new ObjectId(id) },
    { $set: game }
  );
}

export async function deleteGame(id) {
  return getDb().collection('games').deleteOne({
    _id: new ObjectId(id)
  });
}