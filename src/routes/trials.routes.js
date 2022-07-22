const router = require("express").Router();
const TrialsServices = require("../services/trials.services");
const service = new TrialsServices();

router.get("/", async (req, res, next) => {
  try {
    await service.find(function (data) {
      return res.status(200).json(data);
    }, next);
  } catch (error) {
    next(error);
  }
});
