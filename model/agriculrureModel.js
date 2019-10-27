var db = require("../database/connection");

var Agriculture = function(agriculture) {
  this.id = agriculture.id;
  this.name = agriculture.name;
  this.soil_moisture = agriculture.soil_moisture;
  this.lighting_level = agriculture.lighting_level;
  this.location = agriculture.location;
};

Agriculture.createAgriculture = function(newAgriculture, result) {
  db.query("INSERT INTO agriculture set ?", newAgriculture, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Agriculture.getAgricultureById = function(agricultureId, result) {
  db.query("Select * from agriculture where id = ? ", agricultureId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Agriculture.getAllAgriculture = function(result) {
  db.query("Select * from agriculture", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Agriculture.remove = function(agricultureId, result) {
  db.query("DELETE FROM agriculture WHERE id = ?", agricultureId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Agriculture;
