const mongoConnection = require("../database");
const boom = require("@hapi/boom");
const TrialModel = require("../models/trials");
class UsersServices {
  constructor() {}

  //   async findOne(id, cb, next) {
  //     mongoConnection.query(
  //       "SELECT * FROM users WHERE user_id = ?",
  //       [id],
  //       (err, rows, fields) => {
  //         try {
  //           if (err) throw boom.conflict("Invalid request");
  //           if (rows.length === 0) throw boom.notFound("User not found");

  //           cb(rows[0]);
  //         } catch (error) {
  //           next(error);
  //         }
  //       }
  //     );
  //   }

  async find(cb, next) {
    return await TrialModel.find({}, null, { limit: 2 });
    /* mongoConnection.query("db.trials.find()", (err, rows, fields) => {
      try {
        if (err) console.log("Invalid request");

        cb(rows);
      } catch (error) {
        next(error);
      }
    }); */
  }

  //   async create(data, cb, next) {
  //     mongoConnection.query(
  //       "SELECT * FROM users WHERE user_email = ?",
  //       [data.user_email],
  //       async (err, rows, fields) => {
  //         try {
  //           if (err) throw boom.conflict("Invalid request");
  //           if (rows.length > 0) throw boom.unauthorized("Email existed");
  //           data.user_password = await encryptPassword(data.user_password);
  //           mongoConnection.query(
  //             "INSERT INTO users SET ?",
  //             data,
  //             function (err, results, fields) {
  //               try {
  //                 if (err) throw boom.conflict("Invalid request");
  //                 data.user_id = results.insertId;
  //                 delete data.user_password;
  //                 cb(data);
  //               } catch (error) {
  //                 next(error);
  //               }
  //             }
  //           );
  //         } catch (error) {
  //           next(error);
  //         }
  //       }
  //     );
  //   }

  //   async update(id, changes, cb, next) {
  //     mongoConnection.query(
  //       "SELECT user_id,user_email FROM users WHERE user_id = ?",
  //       [id],
  //       (err, rows, fields) => {
  //         try {
  //           if (err) throw boom.conflict("Invalid request");
  //           if (rows.length === 0) throw boom.notFound("User not found");
  //           mongoConnection.query(
  //             "UPDATE users SET ? WHERE user_id = ?",
  //             [changes, id],
  //             function (err, results, fields) {
  //               try {
  //                 console.log(err);
  //                 if (err) throw boom.conflict("Invalid request");
  //                 for (const key in changes) {
  //                   if (Object.hasOwnProperty.call(rows[0], key)) {
  //                     rows[0][key] = changes[key];
  //                   }
  //                 }
  //                 cb(rows[0]);
  //               } catch (error) {
  //                 next(error);
  //               }
  //             }
  //           );
  //         } catch (error) {
  //           next(error);
  //         }
  //       }
  //     );
  //   }
  //   async delete(id, cb, next) {
  //     mongoConnection.query(
  //       "SELECT * FROM users WHERE user_id = ?",
  //       [id],
  //       (err, rows) => {
  //         try {
  //           if (err) throw boom.conflict("Invalid request");
  //           if (rows.length === 0) throw boom.notFound("User not found");
  //           mongoConnection.query(
  //             "DELETE FROM users WHERE user_id = ?",
  //             [id],
  //             (err, result) => {
  //               try {
  //                 if (err) throw boom.conflict("Invalid request");
  //                 delete rows[0].user_password;
  //                 cb(rows);
  //               } catch (error) {
  //                 next(error);
  //               }
  //             }
  //           );
  //         } catch (error) {
  //           next(error);
  //         }
  //       }
  //     );
  //   }
}

module.exports = UsersServices;
