/**
 *softDeleteAppointment_schedule.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Appointment_schedule. {status, message, data}
 */
const softDeleteAppointment_schedule = ({ Appointment_scheduleDb }) => async (params,req,res) => {
  let updatedAppointment_schedule = await Appointment_scheduleDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedAppointment_schedule){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedAppointment_schedule });
};
module.exports = softDeleteAppointment_schedule;