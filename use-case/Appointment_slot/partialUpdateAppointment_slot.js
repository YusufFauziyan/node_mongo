/**
 *partialUpdateAppointment_slot.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Appointment_slot. {status, message, data}
 */
const partialUpdateAppointment_slot = ({ Appointment_slotDb }) => async (params,req,res) => {
  const appointment_slot = await Appointment_slotDb.updateOne(params.query,params.dataToUpdate);
  if (!appointment_slot){
    return response.recordNotFound();
  }
  return response.success({ data:appointment_slot });
};
module.exports = partialUpdateAppointment_slot;