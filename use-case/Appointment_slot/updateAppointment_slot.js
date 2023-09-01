/**
 *updateAppointment_slot.js
 */

const  Appointment_slotEntity = require('../../entities/Appointment_slot');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Appointment_slot. {status, message, data}
 */
const updateAppointment_slot = ({
  Appointment_slotDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let appointment_slot = Appointment_slotEntity(dataToUpdate);
  appointment_slot = await Appointment_slotDb.updateOne(query,appointment_slot);
  if (!appointment_slot){
    return response.recordNotFound();
  }
  return response.success({ data:appointment_slot });
};
module.exports = updateAppointment_slot;