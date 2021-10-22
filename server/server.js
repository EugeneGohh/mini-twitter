const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./connect-to-database");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, world." });
});

// Get all tweets
app.get("/tweets", async (req, res) => {
  // get all tweets from db
  const db = await connectToDatabase();
  const tweets = await db.collection("tweets").find({}).toArray();

  // return tweets as json
  res.json({ tweets });
});

// find tweets
// create tweets
app.post("/tweets", async (req, res) => {
  const db = await connectToDatabase();
  const tweet = await db.collection("tweets").insertOne({
    text: req.body.text,
  });
  res.json({ tweet });
});

// update tweets
// delete tweets

app.listen(1337);
