// imports
const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/api/houses/house_id", (req, res) => {
  let AllHouses = db;
  res.status(200).send(AllHouses);
});

let baseURL = '/api/houses';

const {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} = require("./controllers/controllers.js");
const controllers = require("./controllers/controllers.js");


app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.delete("/api/houses/house_id", deleteHouse);
app.put("/api/houses/house_id", updateHouse);

app.listen(4004, () => console.log("Listening on port 4004 ..."));

