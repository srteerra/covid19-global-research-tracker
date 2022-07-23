const mongoConnection = require("../database");
const boom = require("@hapi/boom");
const TrialModel = require("../models/trials");
class UsersServices {
  constructor() {}

  async find(cb, next) {
    return await TrialModel.find({}, null, {
      limit: 10,
    });
  }

  async create(cb, next) {
    return await TrialModel.create({}, null, {
      limit: 10,
    });
  }
}

module.exports = UsersServices;
