const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cartRoute = require("./routes/cartRoute.js");
const historyRoute = require("./routes/historyRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");
const dotenv = require("dotenv");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", (request, response) => {
  response.send(
    `<h2>Welcome to the server of Eating Website</h2>`
  );
});

app.use("/Cart", cartRoute);
app.use("/History", historyRoute);
app.use("/Main", reviewRoute);

mongoose
  .connect(
    "mongodb+srv://pallavsingh07:pallavsingh07@cluster0.sf3fvsx.mongodb.net/Cluster0"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log(`Node Js Server started at Port:5000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
