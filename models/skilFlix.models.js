const mongoose = require("mongoose");

const skilFlixSchema = new mongoose.Schema({
  cinemaName: {
    type: String,
    require: true,
  },
  films: {
    type: String,
  },
  color: {
    location: String,
  }
});

const SkilFlixModel = mongoose.model("SkilFlix", skilFlixSchema);
module.exports = SkilFlixModel;