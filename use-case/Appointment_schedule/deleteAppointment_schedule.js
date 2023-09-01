
/**
 *deleteAppointment_schedule.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Appointment_schedule. {status, message, data}
 */
const deleteAppointment_schedule = ({ Appointment_scheduleDb }) => async (query,req,res) => {
  let deletedAppointment_schedule = await Appointment_scheduleDb.deleteOne(query);
  if (!deletedAppointment_schedule){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedAppointment_schedule });
};

module.exports = deleteAppointment_schedule;