const cors = require("cors");
const express = require("express");
const connection = require("./Helper/db");
const routes = require("./Routes/index");
require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors({ origin: "http://localhost:3000", methods: "*" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use("/api", routes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT;

app.listen(4050, (req, res) => {
  console.log(`Port is running on ${PORT}`);
});
