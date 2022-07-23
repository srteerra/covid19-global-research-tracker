const { Schema, model } = require("mongoose");

const TrialSchema = new Schema({
  TrialId: {
    type: String,
  },
  "Public title": {
    type: String,
  },
  "Date Registration": {
    type: String,
  },
  "Study type": {
    type: String,
  },
  "Study design": {
    type: String,
  },
  "Source  Register": {
    type: String,
  },
  "Primary sponsor": {
    type: String,
  },
  "Contact Address": {
    type: String,
  },
});

module.exports = model("trial", TrialSchema);
