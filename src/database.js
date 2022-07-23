const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/covid_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Connected"))
  .catch((err) => console.error(err));
