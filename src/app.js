/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();
require("./database");

const { routerApi } = require("./routes/api.routes");

// express
const express = require("express");
const path = require("path");

// INITIALIZING
const app = express();
app.set("port", process.env.PORT || 9090);

//----------------Routes--------------
routerApi(app);
const errors = require("./middlewares/error.handler");

//---------------Errors-----------------
app.use(errors.logErrors);
app.use(errors.boomErrorHandler);
app.use(errors.errorHandler);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// RUN SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT: ", app.get("port"));
});
