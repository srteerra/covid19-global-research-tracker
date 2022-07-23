const router = require("express").Router();
const TrialsServices = require("../services/trials.services");
const service = new TrialsServices();

router.get("/", async (req, res, next) => {
  try {
    let response = await service.find();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
