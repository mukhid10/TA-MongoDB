const { userProfile } = require("../models/index");

module.exports = {
  getAll: async (req, res) => {
    const data = await userProfile.find({}, "-__v");
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
    const data = await userProfile.findById(req.params.id, "-__v");
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
  addUserProfile: async (req, res) => {
    const data = req.body;

      try {
        await userProfile.create(data);
        res.json({
          message: "berhasil input data"
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  },

  updateUserProfileById: async (req, res) => {
      await userProfile.updateOne({ _id: req.params.id }, { $set: req.body });
      try {
        res.json({
          message: "berhasil update product byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
  },

  deleteUserProfileById: async (req, res) => {
      await userProfile.deleteOne({ _id: req.params.id });
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