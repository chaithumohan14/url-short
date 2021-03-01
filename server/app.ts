import express from "express";
import dotenv from "dotenv";
import Database from "../models/Database";

dotenv.config();
const app: express.Application = express();
const database = new Database();

app.get("/:key", (req, res) => {
  const key = req.params.key;
  const value = database.getValue(key);
  console.log(value);
  if (value) {
    res.redirect(value);
  } else {
    res.send("Key not found");
  }
});

app.listen(process.env.PORT, () => {
  console.log("> Server Started...");
});
