const router = require('express').Router();
const carController = require("../controllers/car.controller");

router.get("/api/cars", carController.selectAll);

module.exports = router;
