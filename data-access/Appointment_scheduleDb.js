let Appointment_schedule = require('../db/mongoDB/models/Appointment_schedule');
let { 
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
} = require('../db/mongoDB/dbService')(Appointment_schedule);

module.exports = {
  create,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  findOne,
  findMany,
  count,
  paginate,
};