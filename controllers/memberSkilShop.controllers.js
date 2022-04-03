const { memberSkilShop } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await memberSkilShop.find({}, "-__v");
    try {
      res.json({
        message: "berhasil ambil data",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getById: async (req, res) => {
    const data = await memberSkilShop.findById(req.params.id, "-__v");
    try {
      res.json({
        message: "berhasil ambil data",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  addMember: async (req, res) => {
    const data = req.body;

      try {
        await memberSkilShop.create(data);
        res.json({
          message: "berhasil input data"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateMemberById: async (req, res) => {
      await memberSkilShop.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "berhasil update data byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteMemberById: async (req, res) => {
      await memberSkilShop.deleteOne({ _id: req.params.id });
      try {
        res.json({
          message: "berhasil delete data byID"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
};