const { skilFlix } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await skilFlix.find({}, "-__v");
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
    const data = await skilFlix.findById(req.params.id, "-__v");
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
  addSkilFlix: async (req, res) => {
    const data = req.body;

      try {
        await skilFlix.create(data);
        res.json({
          message: "berhasil input data"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateSkilFlixById: async (req, res) => {
      await skilFlix.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "berhasil update product byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteSKilFlixById: async (req, res) => {
      await skilFlix.deleteOne({ _id: req.params.id });
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