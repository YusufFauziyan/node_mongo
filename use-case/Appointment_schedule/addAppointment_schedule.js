/**
 *addAppointment_schedule.js
 */

const  Appointment_scheduleEntity = require('../../entities/Appointment_schedule');
const response = require('../../utils/response');
/**
 * @description : create new record of Appointment_schedule in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addAppointment_schedule = ({
  Appointment_scheduleDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Appointment_schedule = Appointment_scheduleEntity(dataToCreate);
  Appointment_schedule = await Appointment_scheduleDb.create(Appointment_schedule);
  return response.success({ data:Appointment_schedule });
};
module.exports = addAppointment_schedule;