import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI is missing from .env');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let db;

export async function connectToMongo() {
  if (!db) {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    db = client.db('cis486');
    console.log('Connected to MongoDB');
  }
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error('Database not connected yet');
  }
  return db;
}