const { Schema, model } = require("mongoose");

const TrialSchema = new Schema({
  TrialID: { type: String },
});

module.exports = model("trial", TrialSchema);
