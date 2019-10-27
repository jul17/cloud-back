var express = require("express");
var router = express.Router();
var Agriculture = require("../model/agriculrureModel");

/* POST agriculture */
router.post("/", function(req, res) {
  var newAgriculture = new Agriculture(req.body);
  console.log(req.body);
  if (
    !newAgriculture.name ||
    !newAgriculture.soil_moisture ||
    !newAgriculture.lighting_level
  ) {
    res.status(400).json({
      error: true,
      message: "Please, provide name, soil_moisture, lighting_level, fields."
    });
  }
  Agriculture.createAgriculture(newAgriculture, function(err, agricultureId) {
    if (err) res.json(err);
    res.json(agricultureId);
  });
});

/* GET list of agricultures */
router.get("/", function(req, res) {
  Agriculture.getAllAgriculture(function(err, result) {
    if (err) res.json(err);
    res.json(result);
  });
});

/* GET agriculture by id */
router.get("/:agricultureId", function(req, res) {
  Agriculture.getAgricultureById(req.params.agricultureId, function(err, result) {
    if (err) res.json(err);
    res.json(result);
  });
});

/* DELETE agriculture by id */
router.delete("/:agricultureId", function(req, res) {
  Agriculture.remove(req.params.agricultureId, function(err, agriculture) {
    if (err) res.json(err);
    res.json({ message: "Task successfully deleted" });
  });
});

module.exports = router;
