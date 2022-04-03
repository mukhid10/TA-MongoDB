const mongoose = require("mongoose");

const MemberSkilShopSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  telephone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const MemberSkilShopModels = mongoose.model("Member-Skilshops", MemberSkilShopSchema);
module.exports = MemberSkilShopModels