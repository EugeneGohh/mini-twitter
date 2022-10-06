const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient;

let cachedDb = null;

module.exports = async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect("mongodb+srv://eugene:091178goH@cluster0.qyblufz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("twitter");
  cachedDb = db;
  return db;
};
