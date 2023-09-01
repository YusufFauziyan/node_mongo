/**
 *partialUpdateAppointment_schedule.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Appointment_schedule. {status, message, data}
 */
const partialUpdateAppointment_schedule = ({ Appointment_scheduleDb }) => async (params,req,res) => {
  const appointment_schedule = await Appointment_scheduleDb.updateOne(params.query,params.dataToUpdate);
  if (!appointment_schedule){
    return response.recordNotFound();
  }
  return response.success({ data:appointment_schedule });
};
module.exports = partialUpdateAppointment_schedule;