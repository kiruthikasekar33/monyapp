const express = require("express");
const router = express.Router();

const memberRoutes = require("./memberRoutes");


router.use("/member",memberRoutes);

module.exports= router;