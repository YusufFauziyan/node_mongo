/**
 *bulkUpdateAppointment_slot.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of Appointment_slot with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateAppointment_slot = ({ Appointment_slotDb }) => async (params,req,res) => {
  const updatedAppointment_slot = await Appointment_slotDb.updateMany(params.query,params.dataToUpdate);
  return response.success({ data:{ count:updatedAppointment_slot } });
};
module.exports = bulkUpdateAppointment_slot;