const mongoose = require("mongoose");

const UserProfileSkiljekSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
});

const UserProfileSkiljekModel = mongoose.model("User-Profiles", UserProfileSkiljekSchema);
module.exports = UserProfileSkiljekModel;