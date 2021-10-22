const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient;

let cachedDb = null;

module.exports = async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("twitter");
  cachedDb = db;
  return db;
};
