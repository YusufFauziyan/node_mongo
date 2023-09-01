/**
 *deleteManyAppointment_schedule.js
 */

const response = require('../../utils/response');
/**
 * @description : delete records from database by using ids.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyAppointment_schedule = ({ Appointment_scheduleDb }) => async (query,req,res) => {
  let deletedAppointment_schedule = await Appointment_scheduleDb.deleteMany(query);
  return response.success({ data: { count : deletedAppointment_schedule } });
};
module.exports = deleteManyAppointment_schedule;