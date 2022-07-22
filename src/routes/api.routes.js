const router = require("express").Router();
const trialsRouter = require("./trials.routes");

const routerApi = (app) => {
  app.use("/api/v1", router);
  router.use("/trials", trialsRouter);
};

module.exports = { routerApi };
