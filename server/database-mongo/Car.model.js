const mongoose = require("mongoose");
const db = require("./index.js");

const carSchema = new mongoose.Schema({
  modelName: String,
  color: String,
  passengersNum: Number,
  range: String,
  carImg: String,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
